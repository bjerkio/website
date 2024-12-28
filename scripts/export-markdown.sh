#!/bin/bash

# Check if html2markdown is installed
if ! command -v html2markdown &> /dev/null; then
    echo "Error: html2markdown is not installed"
    echo "Please install it using your package manager"
    echo "For example:"
    echo "  npm install -g html2markdown"
    echo "  or"
    echo "  apt-get install html2markdown"
    exit 1
fi

extract_markdown_from_astro() {
    local astro_file="$1"
    local temp_md="${astro_file%.astro}.md"

    # Extract content between frontmatter (between --- or +++ delimiters)
    # Then remove any JSX/Astro components
    awk '
        BEGIN { in_frontmatter=0; in_content=0; }
        /^[+-]{3}/ { 
            if (in_frontmatter) {
                in_frontmatter=0;
                in_content=1;
                next;
            }
            in_frontmatter=1;
            next;
        }
        in_content { print; }
    ' "$astro_file" | html2markdown > "$temp_md"

    echo "$temp_md"
}

find_markdown_files() {
    local search_dir="$1"
    local dest_dir="$2"

    # Find all .md files and copy them with their directory path as part of filename
    find "$search_dir" -name "*.md" | while read -r filepath; do
        # Get the directory path without the leading search_dir
        dir_path=$(dirname "$filepath" | sed "s|^${search_dir}/||")
        # Get the filename
        filename=$(basename "$filepath")
        
        # If the file is index.md, use the directory name instead
        if [ "$filename" = "index.md" ]; then
            new_filename="${dir_path//\//_}.md"
        else
            new_filename="${dir_path//\//_}_${filename}"
        fi
        
        # Copy the file with new name
        cp "$filepath" "${dest_dir}/${new_filename}"
        echo "Copied: $filepath -> ${dest_dir}/${new_filename}"
    done

    # Process .astro files
    find "$search_dir" -name "*.astro" | while read -r filepath; do
        # Skip if path contains [...slug]
        if [[ "$filepath" == *"[...slug]"* ]]; then
            echo "Skipping slug file: $filepath"
            continue
        fi

        dir_path=$(dirname "$filepath" | sed "s|^${search_dir}/||")
        filename=$(basename "$filepath" .astro)
        
        # Extract markdown content
        temp_md=$(extract_markdown_from_astro "$filepath")
        
        if [ "$filename" = "index" ]; then
            new_filename="${dir_path//\//_}.md"
        else
            new_filename="${dir_path//\//_}_${filename}.md"
        fi
        
        mv "$temp_md" "${dest_dir}/${new_filename}"
        echo "Converted Astro: $filepath -> ${dest_dir}/${new_filename}"
    done
}

# Get destination directory from first argument, or use default
DEST_DIR="${1:-./output-markdown}"

# Create destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

find_markdown_files "./src/pages" "$DEST_DIR"