export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  /** Returns all children nodes filtered by type Locale */
  childrenLocale?: Maybe<Array<Maybe<Locale>>>;
  /** Returns the first child node of type Locale or null if there are no children of given type on this node */
  childLocale?: Maybe<Locale>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenMdx'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___frontmatter___language'
  | 'childrenMdx___frontmatter___type'
  | 'childrenMdx___frontmatter___name'
  | 'childrenMdx___frontmatter___homePage___id'
  | 'childrenMdx___frontmatter___homePage___title'
  | 'childrenMdx___frontmatter___homePage___linkTo'
  | 'childrenMdx___frontmatter___homePage___linkText'
  | 'childrenMdx___frontmatter___homePage___image'
  | 'childrenMdx___frontmatter___homePage___hoverImage'
  | 'childrenMdx___frontmatter___homePage___description'
  | 'childrenMdx___frontmatter___servicesPage___id'
  | 'childrenMdx___frontmatter___servicesPage___name'
  | 'childrenMdx___frontmatter___servicesPage___title'
  | 'childrenMdx___frontmatter___servicesPage___photo'
  | 'childrenMdx___frontmatter___servicesPage___icon'
  | 'childrenMdx___frontmatter___servicesPage___initials'
  | 'childrenMdx___frontmatter___servicesPage___position'
  | 'childrenMdx___frontmatter___servicesPage___description'
  | 'childrenMdx___frontmatter___id'
  | 'childrenMdx___frontmatter___position'
  | 'childrenMdx___frontmatter___email'
  | 'childrenMdx___frontmatter___phoneNumber'
  | 'childrenMdx___frontmatter___photo'
  | 'childrenMdx___frontmatter___descriptionArray'
  | 'childrenMdx___frontmatter___image'
  | 'childrenMdx___frontmatter___slug'
  | 'childrenMdx___slug'
  | 'childrenMdx___body'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___html'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenMdx___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___children'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___language'
  | 'childMdx___frontmatter___type'
  | 'childMdx___frontmatter___name'
  | 'childMdx___frontmatter___homePage___id'
  | 'childMdx___frontmatter___homePage___title'
  | 'childMdx___frontmatter___homePage___linkTo'
  | 'childMdx___frontmatter___homePage___linkText'
  | 'childMdx___frontmatter___homePage___image'
  | 'childMdx___frontmatter___homePage___hoverImage'
  | 'childMdx___frontmatter___homePage___description'
  | 'childMdx___frontmatter___servicesPage___id'
  | 'childMdx___frontmatter___servicesPage___name'
  | 'childMdx___frontmatter___servicesPage___title'
  | 'childMdx___frontmatter___servicesPage___photo'
  | 'childMdx___frontmatter___servicesPage___icon'
  | 'childMdx___frontmatter___servicesPage___initials'
  | 'childMdx___frontmatter___servicesPage___position'
  | 'childMdx___frontmatter___servicesPage___description'
  | 'childMdx___frontmatter___id'
  | 'childMdx___frontmatter___position'
  | 'childMdx___frontmatter___email'
  | 'childMdx___frontmatter___phoneNumber'
  | 'childMdx___frontmatter___photo'
  | 'childMdx___frontmatter___descriptionArray'
  | 'childMdx___frontmatter___image'
  | 'childMdx___frontmatter___slug'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type'
  | 'childrenLocale'
  | 'childrenLocale___id'
  | 'childrenLocale___parent___id'
  | 'childrenLocale___parent___parent___id'
  | 'childrenLocale___parent___parent___children'
  | 'childrenLocale___parent___children'
  | 'childrenLocale___parent___children___id'
  | 'childrenLocale___parent___children___children'
  | 'childrenLocale___parent___internal___content'
  | 'childrenLocale___parent___internal___contentDigest'
  | 'childrenLocale___parent___internal___description'
  | 'childrenLocale___parent___internal___fieldOwners'
  | 'childrenLocale___parent___internal___ignoreType'
  | 'childrenLocale___parent___internal___mediaType'
  | 'childrenLocale___parent___internal___owner'
  | 'childrenLocale___parent___internal___type'
  | 'childrenLocale___children'
  | 'childrenLocale___children___id'
  | 'childrenLocale___children___parent___id'
  | 'childrenLocale___children___parent___children'
  | 'childrenLocale___children___children'
  | 'childrenLocale___children___children___id'
  | 'childrenLocale___children___children___children'
  | 'childrenLocale___children___internal___content'
  | 'childrenLocale___children___internal___contentDigest'
  | 'childrenLocale___children___internal___description'
  | 'childrenLocale___children___internal___fieldOwners'
  | 'childrenLocale___children___internal___ignoreType'
  | 'childrenLocale___children___internal___mediaType'
  | 'childrenLocale___children___internal___owner'
  | 'childrenLocale___children___internal___type'
  | 'childrenLocale___internal___content'
  | 'childrenLocale___internal___contentDigest'
  | 'childrenLocale___internal___description'
  | 'childrenLocale___internal___fieldOwners'
  | 'childrenLocale___internal___ignoreType'
  | 'childrenLocale___internal___mediaType'
  | 'childrenLocale___internal___owner'
  | 'childrenLocale___internal___type'
  | 'childrenLocale___language'
  | 'childrenLocale___ns'
  | 'childrenLocale___data'
  | 'childrenLocale___fileAbsolutePath'
  | 'childLocale___id'
  | 'childLocale___parent___id'
  | 'childLocale___parent___parent___id'
  | 'childLocale___parent___parent___children'
  | 'childLocale___parent___children'
  | 'childLocale___parent___children___id'
  | 'childLocale___parent___children___children'
  | 'childLocale___parent___internal___content'
  | 'childLocale___parent___internal___contentDigest'
  | 'childLocale___parent___internal___description'
  | 'childLocale___parent___internal___fieldOwners'
  | 'childLocale___parent___internal___ignoreType'
  | 'childLocale___parent___internal___mediaType'
  | 'childLocale___parent___internal___owner'
  | 'childLocale___parent___internal___type'
  | 'childLocale___children'
  | 'childLocale___children___id'
  | 'childLocale___children___parent___id'
  | 'childLocale___children___parent___children'
  | 'childLocale___children___children'
  | 'childLocale___children___children___id'
  | 'childLocale___children___children___children'
  | 'childLocale___children___internal___content'
  | 'childLocale___children___internal___contentDigest'
  | 'childLocale___children___internal___description'
  | 'childLocale___children___internal___fieldOwners'
  | 'childLocale___children___internal___ignoreType'
  | 'childLocale___children___internal___mediaType'
  | 'childLocale___children___internal___owner'
  | 'childLocale___children___internal___type'
  | 'childLocale___internal___content'
  | 'childLocale___internal___contentDigest'
  | 'childLocale___internal___description'
  | 'childLocale___internal___fieldOwners'
  | 'childLocale___internal___ignoreType'
  | 'childLocale___internal___mediaType'
  | 'childLocale___internal___owner'
  | 'childLocale___internal___type'
  | 'childLocale___language'
  | 'childLocale___ns'
  | 'childLocale___data'
  | 'childLocale___fileAbsolutePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  childrenLocale?: Maybe<LocaleFilterListInput>;
  childLocale?: Maybe<LocaleFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type Locale = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  language?: Maybe<Scalars['String']>;
  ns?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
};

export type LocaleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<LocaleEdge>;
  nodes: Array<Locale>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<LocaleGroupConnection>;
};


export type LocaleConnectionDistinctArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: LocaleFieldsEnum;
};

export type LocaleEdge = {
  next?: Maybe<Locale>;
  node: Locale;
  previous?: Maybe<Locale>;
};

export type LocaleFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'language'
  | 'ns'
  | 'data'
  | 'fileAbsolutePath';

export type LocaleFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  language?: Maybe<StringQueryOperatorInput>;
  ns?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
};

export type LocaleFilterListInput = {
  elemMatch?: Maybe<LocaleFilterInput>;
};

export type LocaleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<LocaleEdge>;
  nodes: Array<Locale>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type LocaleSortInput = {
  fields?: Maybe<Array<Maybe<LocaleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Mdx = Node & {
  rawBody: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  slug?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  excerpt: Scalars['String'];
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  mdxAST?: Maybe<Scalars['JSON']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type MdxConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MdxGroupConnection>;
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter___title'
  | 'frontmatter___language'
  | 'frontmatter___type'
  | 'frontmatter___name'
  | 'frontmatter___homePage___id'
  | 'frontmatter___homePage___title'
  | 'frontmatter___homePage___linkTo'
  | 'frontmatter___homePage___linkText'
  | 'frontmatter___homePage___image'
  | 'frontmatter___homePage___hoverImage'
  | 'frontmatter___homePage___imageStyle___ml'
  | 'frontmatter___homePage___description'
  | 'frontmatter___servicesPage___id'
  | 'frontmatter___servicesPage___name'
  | 'frontmatter___servicesPage___title'
  | 'frontmatter___servicesPage___url___navigationLink'
  | 'frontmatter___servicesPage___url___linkText'
  | 'frontmatter___servicesPage___photo'
  | 'frontmatter___servicesPage___icon'
  | 'frontmatter___servicesPage___initials'
  | 'frontmatter___servicesPage___position'
  | 'frontmatter___servicesPage___description'
  | 'frontmatter___id'
  | 'frontmatter___position'
  | 'frontmatter___email'
  | 'frontmatter___phoneNumber'
  | 'frontmatter___photo'
  | 'frontmatter___descriptionArray'
  | 'frontmatter___image'
  | 'frontmatter___slug'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings___value'
  | 'headings___depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch?: Maybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  title: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  homePage?: Maybe<MdxFrontmatterHomePage>;
  servicesPage?: Maybe<MdxFrontmatterServicesPage>;
  id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  descriptionArray?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  homePage?: Maybe<MdxFrontmatterHomePageFilterInput>;
  servicesPage?: Maybe<MdxFrontmatterServicesPageFilterInput>;
  id?: Maybe<IntQueryOperatorInput>;
  position?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  phoneNumber?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<StringQueryOperatorInput>;
  descriptionArray?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type MdxFrontmatterHomePage = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  linkTo?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  hoverImage?: Maybe<Scalars['String']>;
  imageStyle?: Maybe<MdxFrontmatterHomePageImageStyle>;
  description?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterHomePageFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  linkTo?: Maybe<StringQueryOperatorInput>;
  linkText?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  hoverImage?: Maybe<StringQueryOperatorInput>;
  imageStyle?: Maybe<MdxFrontmatterHomePageImageStyleFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type MdxFrontmatterHomePageImageStyle = {
  ml?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterHomePageImageStyleFilterInput = {
  ml?: Maybe<StringQueryOperatorInput>;
};

export type MdxFrontmatterServicesPage = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<MdxFrontmatterServicesPageUrl>;
  photo?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  initials?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterServicesPageFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<MdxFrontmatterServicesPageUrlFilterInput>;
  photo?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  initials?: Maybe<StringQueryOperatorInput>;
  position?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type MdxFrontmatterServicesPageUrl = {
  navigationLink?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterServicesPageUrlFilterInput = {
  navigationLink?: Maybe<StringQueryOperatorInput>;
  linkText?: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollection = Node & {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  creatorId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  image?: Maybe<MediumCollectionImage>;
  metadata?: Maybe<MediumCollectionMetadata>;
  virtuals?: Maybe<MediumCollectionVirtuals>;
  logo?: Maybe<MediumCollectionLogo>;
  twitterUsername?: Maybe<Scalars['String']>;
  facebookPageName?: Maybe<Scalars['String']>;
  publicEmail?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<MediumCollectionSections>>>;
  tintColor?: Maybe<Scalars['String']>;
  lightText?: Maybe<Scalars['Boolean']>;
  favicon?: Maybe<MediumCollectionFavicon>;
  colorPalette?: Maybe<MediumCollectionColorPalette>;
  navItems?: Maybe<Array<Maybe<MediumCollectionNavItems>>>;
  colorBehavior?: Maybe<Scalars['Int']>;
  instantArticlesState?: Maybe<Scalars['Int']>;
  acceleratedMobilePagesState?: Maybe<Scalars['Int']>;
  ampLogo?: Maybe<MediumCollectionAmpLogo>;
  header?: Maybe<MediumCollectionHeader>;
  paidForDomainAt?: Maybe<Scalars['Date']>;
  subscriberCount?: Maybe<Scalars['Int']>;
  tagline?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  medium_id?: Maybe<Scalars['String']>;
  collectionMastheadId?: Maybe<Scalars['String']>;
  polarisCoverImage?: Maybe<MediumCollectionPolarisCoverImage>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MediumCollectionPaidForDomainAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumCollectionAmpLogo = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumCollectionAmpLogoFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionColorPalette = {
  defaultBackgroundSpectrum?: Maybe<MediumCollectionColorPaletteDefaultBackgroundSpectrum>;
  tintBackgroundSpectrum?: Maybe<MediumCollectionColorPaletteTintBackgroundSpectrum>;
  highlightSpectrum?: Maybe<MediumCollectionColorPaletteHighlightSpectrum>;
  darkBackgroundSpectrum?: Maybe<MediumCollectionColorPaletteDarkBackgroundSpectrum>;
};

export type MediumCollectionColorPaletteDarkBackgroundSpectrum = {
  colorPoints?: Maybe<Array<Maybe<MediumCollectionColorPaletteDarkBackgroundSpectrumColorPoints>>>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type MediumCollectionColorPaletteDarkBackgroundSpectrumColorPoints = {
  color?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Float']>;
};

export type MediumCollectionColorPaletteDarkBackgroundSpectrumColorPointsFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  point?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionColorPaletteDarkBackgroundSpectrumColorPointsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionColorPaletteDarkBackgroundSpectrumColorPointsFilterInput>;
};

export type MediumCollectionColorPaletteDarkBackgroundSpectrumFilterInput = {
  colorPoints?: Maybe<MediumCollectionColorPaletteDarkBackgroundSpectrumColorPointsFilterListInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionColorPaletteDefaultBackgroundSpectrum = {
  colorPoints?: Maybe<Array<Maybe<MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPoints>>>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPoints = {
  color?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Float']>;
};

export type MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPointsFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  point?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPointsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPointsFilterInput>;
};

export type MediumCollectionColorPaletteDefaultBackgroundSpectrumFilterInput = {
  colorPoints?: Maybe<MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPointsFilterListInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionColorPaletteFilterInput = {
  defaultBackgroundSpectrum?: Maybe<MediumCollectionColorPaletteDefaultBackgroundSpectrumFilterInput>;
  tintBackgroundSpectrum?: Maybe<MediumCollectionColorPaletteTintBackgroundSpectrumFilterInput>;
  highlightSpectrum?: Maybe<MediumCollectionColorPaletteHighlightSpectrumFilterInput>;
  darkBackgroundSpectrum?: Maybe<MediumCollectionColorPaletteDarkBackgroundSpectrumFilterInput>;
};

export type MediumCollectionColorPaletteHighlightSpectrum = {
  colorPoints?: Maybe<Array<Maybe<MediumCollectionColorPaletteHighlightSpectrumColorPoints>>>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type MediumCollectionColorPaletteHighlightSpectrumColorPoints = {
  color?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Float']>;
};

export type MediumCollectionColorPaletteHighlightSpectrumColorPointsFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  point?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionColorPaletteHighlightSpectrumColorPointsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionColorPaletteHighlightSpectrumColorPointsFilterInput>;
};

export type MediumCollectionColorPaletteHighlightSpectrumFilterInput = {
  colorPoints?: Maybe<MediumCollectionColorPaletteHighlightSpectrumColorPointsFilterListInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionColorPaletteTintBackgroundSpectrum = {
  colorPoints?: Maybe<Array<Maybe<MediumCollectionColorPaletteTintBackgroundSpectrumColorPoints>>>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type MediumCollectionColorPaletteTintBackgroundSpectrumColorPoints = {
  color?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Float']>;
};

export type MediumCollectionColorPaletteTintBackgroundSpectrumColorPointsFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  point?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionColorPaletteTintBackgroundSpectrumColorPointsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionColorPaletteTintBackgroundSpectrumColorPointsFilterInput>;
};

export type MediumCollectionColorPaletteTintBackgroundSpectrumFilterInput = {
  colorPoints?: Maybe<MediumCollectionColorPaletteTintBackgroundSpectrumColorPointsFilterListInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumCollectionEdge>;
  nodes: Array<MediumCollection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MediumCollectionGroupConnection>;
};


export type MediumCollectionConnectionDistinctArgs = {
  field: MediumCollectionFieldsEnum;
};


export type MediumCollectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MediumCollectionFieldsEnum;
};

export type MediumCollectionEdge = {
  next?: Maybe<MediumCollection>;
  node: MediumCollection;
  previous?: Maybe<MediumCollection>;
};

export type MediumCollectionFavicon = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumCollectionFaviconFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionFieldsEnum =
  | 'name'
  | 'slug'
  | 'tags'
  | 'creatorId'
  | 'description'
  | 'shortDescription'
  | 'image___imageId'
  | 'image___filter'
  | 'image___backgroundSize'
  | 'image___originalWidth'
  | 'image___originalHeight'
  | 'image___strategy'
  | 'image___height'
  | 'image___width'
  | 'metadata___followerCount'
  | 'metadata___activeAt'
  | 'virtuals___permissions___canPublish'
  | 'virtuals___permissions___canPublishAll'
  | 'virtuals___permissions___canRepublish'
  | 'virtuals___permissions___canRemove'
  | 'virtuals___permissions___canManageAll'
  | 'virtuals___permissions___canSubmit'
  | 'virtuals___permissions___canEditPosts'
  | 'virtuals___permissions___canAddWriters'
  | 'virtuals___permissions___canViewStats'
  | 'virtuals___permissions___canSendNewsletter'
  | 'virtuals___permissions___canViewLockedPosts'
  | 'virtuals___permissions___canViewCloaked'
  | 'virtuals___permissions___canEditOwnPosts'
  | 'virtuals___permissions___canBeAssignedAuthor'
  | 'virtuals___permissions___canEnrollInHightower'
  | 'virtuals___permissions___canLockPostsForMediumMembers'
  | 'virtuals___permissions___canLockOwnPostsForMediumMembers'
  | 'virtuals___permissions___canViewNewsletterV2Stats'
  | 'virtuals___permissions___canCreateNewsletterV3'
  | 'virtuals___isSubscribed'
  | 'virtuals___isEnrolledInHightower'
  | 'virtuals___isEligibleForHightower'
  | 'virtuals___isSubscribedToCollectionEmails'
  | 'virtuals___isMuted'
  | 'virtuals___canToggleEmail'
  | 'logo___imageId'
  | 'logo___filter'
  | 'logo___backgroundSize'
  | 'logo___originalWidth'
  | 'logo___originalHeight'
  | 'logo___strategy'
  | 'logo___height'
  | 'logo___width'
  | 'twitterUsername'
  | 'facebookPageName'
  | 'publicEmail'
  | 'domain'
  | 'sections'
  | 'sections___type'
  | 'sections___collectionHeaderMetadata___title'
  | 'sections___collectionHeaderMetadata___description'
  | 'sections___collectionHeaderMetadata___backgroundImage___id'
  | 'sections___collectionHeaderMetadata___backgroundImage___originalWidth'
  | 'sections___collectionHeaderMetadata___backgroundImage___originalHeight'
  | 'sections___collectionHeaderMetadata___backgroundImage___focusPercentX'
  | 'sections___collectionHeaderMetadata___backgroundImage___focusPercentY'
  | 'sections___collectionHeaderMetadata___logoImage___id'
  | 'sections___collectionHeaderMetadata___logoImage___originalWidth'
  | 'sections___collectionHeaderMetadata___logoImage___originalHeight'
  | 'sections___collectionHeaderMetadata___logoImage___alt'
  | 'sections___collectionHeaderMetadata___alignment'
  | 'sections___collectionHeaderMetadata___layout'
  | 'sections___postListMetadata___source'
  | 'sections___postListMetadata___layout'
  | 'sections___postListMetadata___number'
  | 'tintColor'
  | 'lightText'
  | 'favicon___imageId'
  | 'favicon___filter'
  | 'favicon___backgroundSize'
  | 'favicon___originalWidth'
  | 'favicon___originalHeight'
  | 'favicon___strategy'
  | 'favicon___height'
  | 'favicon___width'
  | 'colorPalette___defaultBackgroundSpectrum___colorPoints'
  | 'colorPalette___defaultBackgroundSpectrum___colorPoints___color'
  | 'colorPalette___defaultBackgroundSpectrum___colorPoints___point'
  | 'colorPalette___defaultBackgroundSpectrum___backgroundColor'
  | 'colorPalette___tintBackgroundSpectrum___colorPoints'
  | 'colorPalette___tintBackgroundSpectrum___colorPoints___color'
  | 'colorPalette___tintBackgroundSpectrum___colorPoints___point'
  | 'colorPalette___tintBackgroundSpectrum___backgroundColor'
  | 'colorPalette___highlightSpectrum___colorPoints'
  | 'colorPalette___highlightSpectrum___colorPoints___color'
  | 'colorPalette___highlightSpectrum___colorPoints___point'
  | 'colorPalette___highlightSpectrum___backgroundColor'
  | 'colorPalette___darkBackgroundSpectrum___colorPoints'
  | 'colorPalette___darkBackgroundSpectrum___colorPoints___color'
  | 'colorPalette___darkBackgroundSpectrum___colorPoints___point'
  | 'colorPalette___darkBackgroundSpectrum___backgroundColor'
  | 'navItems'
  | 'navItems___type'
  | 'navItems___title'
  | 'navItems___url'
  | 'navItems___topicId'
  | 'navItems___source'
  | 'colorBehavior'
  | 'instantArticlesState'
  | 'acceleratedMobilePagesState'
  | 'ampLogo___imageId'
  | 'ampLogo___filter'
  | 'ampLogo___backgroundSize'
  | 'ampLogo___originalWidth'
  | 'ampLogo___originalHeight'
  | 'ampLogo___strategy'
  | 'ampLogo___height'
  | 'ampLogo___width'
  | 'header___title'
  | 'header___description'
  | 'header___backgroundImage___id'
  | 'header___backgroundImage___originalWidth'
  | 'header___backgroundImage___originalHeight'
  | 'header___backgroundImage___focusPercentX'
  | 'header___backgroundImage___focusPercentY'
  | 'header___logoImage___id'
  | 'header___logoImage___originalWidth'
  | 'header___logoImage___originalHeight'
  | 'header___logoImage___alt'
  | 'header___alignment'
  | 'header___layout'
  | 'paidForDomainAt'
  | 'subscriberCount'
  | 'tagline'
  | 'type'
  | 'medium_id'
  | 'collectionMastheadId'
  | 'polarisCoverImage___imageId'
  | 'polarisCoverImage___filter'
  | 'polarisCoverImage___backgroundSize'
  | 'polarisCoverImage___originalWidth'
  | 'polarisCoverImage___originalHeight'
  | 'polarisCoverImage___strategy'
  | 'polarisCoverImage___height'
  | 'polarisCoverImage___width'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MediumCollectionFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  creatorId?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  shortDescription?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<MediumCollectionImageFilterInput>;
  metadata?: Maybe<MediumCollectionMetadataFilterInput>;
  virtuals?: Maybe<MediumCollectionVirtualsFilterInput>;
  logo?: Maybe<MediumCollectionLogoFilterInput>;
  twitterUsername?: Maybe<StringQueryOperatorInput>;
  facebookPageName?: Maybe<StringQueryOperatorInput>;
  publicEmail?: Maybe<StringQueryOperatorInput>;
  domain?: Maybe<StringQueryOperatorInput>;
  sections?: Maybe<MediumCollectionSectionsFilterListInput>;
  tintColor?: Maybe<StringQueryOperatorInput>;
  lightText?: Maybe<BooleanQueryOperatorInput>;
  favicon?: Maybe<MediumCollectionFaviconFilterInput>;
  colorPalette?: Maybe<MediumCollectionColorPaletteFilterInput>;
  navItems?: Maybe<MediumCollectionNavItemsFilterListInput>;
  colorBehavior?: Maybe<IntQueryOperatorInput>;
  instantArticlesState?: Maybe<IntQueryOperatorInput>;
  acceleratedMobilePagesState?: Maybe<IntQueryOperatorInput>;
  ampLogo?: Maybe<MediumCollectionAmpLogoFilterInput>;
  header?: Maybe<MediumCollectionHeaderFilterInput>;
  paidForDomainAt?: Maybe<DateQueryOperatorInput>;
  subscriberCount?: Maybe<IntQueryOperatorInput>;
  tagline?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  medium_id?: Maybe<StringQueryOperatorInput>;
  collectionMastheadId?: Maybe<StringQueryOperatorInput>;
  polarisCoverImage?: Maybe<MediumCollectionPolarisCoverImageFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MediumCollectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumCollectionEdge>;
  nodes: Array<MediumCollection>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MediumCollectionHeader = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<MediumCollectionHeaderBackgroundImage>;
  logoImage?: Maybe<MediumCollectionHeaderLogoImage>;
  alignment?: Maybe<Scalars['Int']>;
  layout?: Maybe<Scalars['Int']>;
};

export type MediumCollectionHeaderBackgroundImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  focusPercentX?: Maybe<Scalars['Float']>;
  focusPercentY?: Maybe<Scalars['Float']>;
};

export type MediumCollectionHeaderBackgroundImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  focusPercentX?: Maybe<FloatQueryOperatorInput>;
  focusPercentY?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionHeaderFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  backgroundImage?: Maybe<MediumCollectionHeaderBackgroundImageFilterInput>;
  logoImage?: Maybe<MediumCollectionHeaderLogoImageFilterInput>;
  alignment?: Maybe<IntQueryOperatorInput>;
  layout?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionHeaderLogoImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  alt?: Maybe<Scalars['String']>;
};

export type MediumCollectionHeaderLogoImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionImage = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumCollectionImageFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionLogo = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumCollectionLogoFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionMetadata = {
  followerCount?: Maybe<Scalars['Int']>;
  activeAt?: Maybe<Scalars['Date']>;
};


export type MediumCollectionMetadataActiveAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumCollectionMetadataFilterInput = {
  followerCount?: Maybe<IntQueryOperatorInput>;
  activeAt?: Maybe<DateQueryOperatorInput>;
};

export type MediumCollectionNavItems = {
  type?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  topicId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type MediumCollectionNavItemsFilterInput = {
  type?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  topicId?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionNavItemsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionNavItemsFilterInput>;
};

export type MediumCollectionPolarisCoverImage = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumCollectionPolarisCoverImageFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionSections = {
  type?: Maybe<Scalars['Int']>;
  collectionHeaderMetadata?: Maybe<MediumCollectionSectionsCollectionHeaderMetadata>;
  postListMetadata?: Maybe<MediumCollectionSectionsPostListMetadata>;
};

export type MediumCollectionSectionsCollectionHeaderMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<MediumCollectionSectionsCollectionHeaderMetadataBackgroundImage>;
  logoImage?: Maybe<MediumCollectionSectionsCollectionHeaderMetadataLogoImage>;
  alignment?: Maybe<Scalars['Int']>;
  layout?: Maybe<Scalars['Int']>;
};

export type MediumCollectionSectionsCollectionHeaderMetadataBackgroundImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  focusPercentX?: Maybe<Scalars['Float']>;
  focusPercentY?: Maybe<Scalars['Float']>;
};

export type MediumCollectionSectionsCollectionHeaderMetadataBackgroundImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  focusPercentX?: Maybe<FloatQueryOperatorInput>;
  focusPercentY?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionSectionsCollectionHeaderMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  backgroundImage?: Maybe<MediumCollectionSectionsCollectionHeaderMetadataBackgroundImageFilterInput>;
  logoImage?: Maybe<MediumCollectionSectionsCollectionHeaderMetadataLogoImageFilterInput>;
  alignment?: Maybe<IntQueryOperatorInput>;
  layout?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionSectionsCollectionHeaderMetadataLogoImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  alt?: Maybe<Scalars['String']>;
};

export type MediumCollectionSectionsCollectionHeaderMetadataLogoImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionSectionsFilterInput = {
  type?: Maybe<IntQueryOperatorInput>;
  collectionHeaderMetadata?: Maybe<MediumCollectionSectionsCollectionHeaderMetadataFilterInput>;
  postListMetadata?: Maybe<MediumCollectionSectionsPostListMetadataFilterInput>;
};

export type MediumCollectionSectionsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionSectionsFilterInput>;
};

export type MediumCollectionSectionsPostListMetadata = {
  source?: Maybe<Scalars['Int']>;
  layout?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
};

export type MediumCollectionSectionsPostListMetadataFilterInput = {
  source?: Maybe<IntQueryOperatorInput>;
  layout?: Maybe<IntQueryOperatorInput>;
  number?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionSortInput = {
  fields?: Maybe<Array<Maybe<MediumCollectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MediumCollectionVirtuals = {
  permissions?: Maybe<MediumCollectionVirtualsPermissions>;
  isSubscribed?: Maybe<Scalars['Boolean']>;
  isEnrolledInHightower?: Maybe<Scalars['Boolean']>;
  isEligibleForHightower?: Maybe<Scalars['Boolean']>;
  isSubscribedToCollectionEmails?: Maybe<Scalars['Boolean']>;
  isMuted?: Maybe<Scalars['Boolean']>;
  canToggleEmail?: Maybe<Scalars['Boolean']>;
};

export type MediumCollectionVirtualsFilterInput = {
  permissions?: Maybe<MediumCollectionVirtualsPermissionsFilterInput>;
  isSubscribed?: Maybe<BooleanQueryOperatorInput>;
  isEnrolledInHightower?: Maybe<BooleanQueryOperatorInput>;
  isEligibleForHightower?: Maybe<BooleanQueryOperatorInput>;
  isSubscribedToCollectionEmails?: Maybe<BooleanQueryOperatorInput>;
  isMuted?: Maybe<BooleanQueryOperatorInput>;
  canToggleEmail?: Maybe<BooleanQueryOperatorInput>;
};

export type MediumCollectionVirtualsPermissions = {
  canPublish?: Maybe<Scalars['Boolean']>;
  canPublishAll?: Maybe<Scalars['Boolean']>;
  canRepublish?: Maybe<Scalars['Boolean']>;
  canRemove?: Maybe<Scalars['Boolean']>;
  canManageAll?: Maybe<Scalars['Boolean']>;
  canSubmit?: Maybe<Scalars['Boolean']>;
  canEditPosts?: Maybe<Scalars['Boolean']>;
  canAddWriters?: Maybe<Scalars['Boolean']>;
  canViewStats?: Maybe<Scalars['Boolean']>;
  canSendNewsletter?: Maybe<Scalars['Boolean']>;
  canViewLockedPosts?: Maybe<Scalars['Boolean']>;
  canViewCloaked?: Maybe<Scalars['Boolean']>;
  canEditOwnPosts?: Maybe<Scalars['Boolean']>;
  canBeAssignedAuthor?: Maybe<Scalars['Boolean']>;
  canEnrollInHightower?: Maybe<Scalars['Boolean']>;
  canLockPostsForMediumMembers?: Maybe<Scalars['Boolean']>;
  canLockOwnPostsForMediumMembers?: Maybe<Scalars['Boolean']>;
  canViewNewsletterV2Stats?: Maybe<Scalars['Boolean']>;
  canCreateNewsletterV3?: Maybe<Scalars['Boolean']>;
};

export type MediumCollectionVirtualsPermissionsFilterInput = {
  canPublish?: Maybe<BooleanQueryOperatorInput>;
  canPublishAll?: Maybe<BooleanQueryOperatorInput>;
  canRepublish?: Maybe<BooleanQueryOperatorInput>;
  canRemove?: Maybe<BooleanQueryOperatorInput>;
  canManageAll?: Maybe<BooleanQueryOperatorInput>;
  canSubmit?: Maybe<BooleanQueryOperatorInput>;
  canEditPosts?: Maybe<BooleanQueryOperatorInput>;
  canAddWriters?: Maybe<BooleanQueryOperatorInput>;
  canViewStats?: Maybe<BooleanQueryOperatorInput>;
  canSendNewsletter?: Maybe<BooleanQueryOperatorInput>;
  canViewLockedPosts?: Maybe<BooleanQueryOperatorInput>;
  canViewCloaked?: Maybe<BooleanQueryOperatorInput>;
  canEditOwnPosts?: Maybe<BooleanQueryOperatorInput>;
  canBeAssignedAuthor?: Maybe<BooleanQueryOperatorInput>;
  canEnrollInHightower?: Maybe<BooleanQueryOperatorInput>;
  canLockPostsForMediumMembers?: Maybe<BooleanQueryOperatorInput>;
  canLockOwnPostsForMediumMembers?: Maybe<BooleanQueryOperatorInput>;
  canViewNewsletterV2Stats?: Maybe<BooleanQueryOperatorInput>;
  canCreateNewsletterV3?: Maybe<BooleanQueryOperatorInput>;
};

export type MediumPost = Node & {
  versionId?: Maybe<Scalars['String']>;
  creatorId?: Maybe<Scalars['String']>;
  homeCollectionId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  detectedLanguage?: Maybe<Scalars['String']>;
  latestVersion?: Maybe<Scalars['String']>;
  latestPublishedVersion?: Maybe<Scalars['String']>;
  hasUnpublishedEdits?: Maybe<Scalars['Boolean']>;
  latestRev?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  acceptedAt?: Maybe<Scalars['Int']>;
  firstPublishedAt?: Maybe<Scalars['Date']>;
  latestPublishedAt?: Maybe<Scalars['Date']>;
  vote?: Maybe<Scalars['Boolean']>;
  experimentalCss?: Maybe<Scalars['String']>;
  displayAuthor?: Maybe<Scalars['String']>;
  content?: Maybe<MediumPostContent>;
  virtuals?: Maybe<MediumPostVirtuals>;
  coverless?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  translationSourcePostId?: Maybe<Scalars['String']>;
  translationSourceCreatorId?: Maybe<Scalars['String']>;
  isApprovedTranslation?: Maybe<Scalars['Boolean']>;
  inResponseToPostId?: Maybe<Scalars['String']>;
  inResponseToRemovedAt?: Maybe<Scalars['Int']>;
  isTitleSynthesized?: Maybe<Scalars['Boolean']>;
  allowResponses?: Maybe<Scalars['Boolean']>;
  importedUrl?: Maybe<Scalars['String']>;
  importedPublishedAt?: Maybe<Scalars['Int']>;
  visibility?: Maybe<Scalars['Int']>;
  uniqueSlug?: Maybe<Scalars['String']>;
  previewContent?: Maybe<MediumPostPreviewContent>;
  license?: Maybe<Scalars['Int']>;
  inResponseToMediaResourceId?: Maybe<Scalars['String']>;
  canonicalUrl?: Maybe<Scalars['String']>;
  approvedHomeCollectionId?: Maybe<Scalars['String']>;
  newsletterId?: Maybe<Scalars['String']>;
  webCanonicalUrl?: Maybe<Scalars['String']>;
  mediumUrl?: Maybe<Scalars['String']>;
  migrationId?: Maybe<Scalars['String']>;
  notifyFollowers?: Maybe<Scalars['Boolean']>;
  notifyTwitter?: Maybe<Scalars['Boolean']>;
  notifyFacebook?: Maybe<Scalars['Boolean']>;
  responseHiddenOnParentPostAt?: Maybe<Scalars['Int']>;
  isSeries?: Maybe<Scalars['Boolean']>;
  isSubscriptionLocked?: Maybe<Scalars['Boolean']>;
  seriesLastAppendedAt?: Maybe<Scalars['Date']>;
  audioVersionDurationSec?: Maybe<Scalars['Int']>;
  sequenceId?: Maybe<Scalars['String']>;
  isEligibleForRevenue?: Maybe<Scalars['Boolean']>;
  isBlockedFromHightower?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Int']>;
  lockedPostSource?: Maybe<Scalars['Int']>;
  hightowerMinimumGuaranteeStartsAt?: Maybe<Scalars['Int']>;
  hightowerMinimumGuaranteeEndsAt?: Maybe<Scalars['Int']>;
  featureLockRequestAcceptedAt?: Maybe<Scalars['Int']>;
  mongerRequestType?: Maybe<Scalars['Int']>;
  layerCake?: Maybe<Scalars['Int']>;
  socialTitle?: Maybe<Scalars['String']>;
  socialDek?: Maybe<Scalars['String']>;
  editorialPreviewTitle?: Maybe<Scalars['String']>;
  editorialPreviewDek?: Maybe<Scalars['String']>;
  isProxyPost?: Maybe<Scalars['Boolean']>;
  proxyPostFaviconUrl?: Maybe<Scalars['String']>;
  proxyPostProviderName?: Maybe<Scalars['String']>;
  proxyPostType?: Maybe<Scalars['Int']>;
  isSuspended?: Maybe<Scalars['Boolean']>;
  isLimitedState?: Maybe<Scalars['Boolean']>;
  seoTitle?: Maybe<Scalars['String']>;
  previewContent2?: Maybe<MediumPostPreviewContent2>;
  cardType?: Maybe<Scalars['Int']>;
  isDistributionAlertDismissed?: Maybe<Scalars['Boolean']>;
  isShortform?: Maybe<Scalars['Boolean']>;
  shortformType?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  medium_id?: Maybe<Scalars['String']>;
  author?: Maybe<MediumUser>;
  primaryTopicId?: Maybe<Scalars['String']>;
  isNewsletter?: Maybe<Scalars['Boolean']>;
  responsesLocked?: Maybe<Scalars['Boolean']>;
  isLockedResponse?: Maybe<Scalars['Boolean']>;
  isPublishToEmail?: Maybe<Scalars['Boolean']>;
  responseDistribution?: Maybe<Scalars['Int']>;
  isMarkedPaywallOnly?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MediumPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MediumPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MediumPostFirstPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MediumPostLatestPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MediumPostSeriesLastAppendedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumPostEdge>;
  nodes: Array<MediumPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MediumPostGroupConnection>;
};


export type MediumPostConnectionDistinctArgs = {
  field: MediumPostFieldsEnum;
};


export type MediumPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MediumPostFieldsEnum;
};

export type MediumPostContent = {
  subtitle?: Maybe<Scalars['String']>;
  postDisplay?: Maybe<MediumPostContentPostDisplay>;
  metaDescription?: Maybe<Scalars['String']>;
};

export type MediumPostContentFilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  postDisplay?: Maybe<MediumPostContentPostDisplayFilterInput>;
  metaDescription?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostContentPostDisplay = {
  coverless?: Maybe<Scalars['Boolean']>;
};

export type MediumPostContentPostDisplayFilterInput = {
  coverless?: Maybe<BooleanQueryOperatorInput>;
};

export type MediumPostEdge = {
  next?: Maybe<MediumPost>;
  node: MediumPost;
  previous?: Maybe<MediumPost>;
};

export type MediumPostFieldsEnum =
  | 'versionId'
  | 'creatorId'
  | 'homeCollectionId'
  | 'title'
  | 'detectedLanguage'
  | 'latestVersion'
  | 'latestPublishedVersion'
  | 'hasUnpublishedEdits'
  | 'latestRev'
  | 'createdAt'
  | 'updatedAt'
  | 'acceptedAt'
  | 'firstPublishedAt'
  | 'latestPublishedAt'
  | 'vote'
  | 'experimentalCss'
  | 'displayAuthor'
  | 'content___subtitle'
  | 'content___postDisplay___coverless'
  | 'content___metaDescription'
  | 'virtuals___statusForCollection'
  | 'virtuals___allowNotes'
  | 'virtuals___previewImage___imageId'
  | 'virtuals___previewImage___filter'
  | 'virtuals___previewImage___backgroundSize'
  | 'virtuals___previewImage___originalWidth'
  | 'virtuals___previewImage___originalHeight'
  | 'virtuals___previewImage___strategy'
  | 'virtuals___previewImage___height'
  | 'virtuals___previewImage___width'
  | 'virtuals___wordCount'
  | 'virtuals___imageCount'
  | 'virtuals___readingTime'
  | 'virtuals___subtitle'
  | 'virtuals___publishedInCount'
  | 'virtuals___noIndex'
  | 'virtuals___recommends'
  | 'virtuals___isBookmarked'
  | 'virtuals___tags'
  | 'virtuals___tags___slug'
  | 'virtuals___tags___name'
  | 'virtuals___tags___postCount'
  | 'virtuals___tags___metadata___postCount'
  | 'virtuals___tags___type'
  | 'virtuals___socialRecommendsCount'
  | 'virtuals___responsesCreatedCount'
  | 'virtuals___links___entries'
  | 'virtuals___links___entries___url'
  | 'virtuals___links___entries___alts'
  | 'virtuals___links___entries___httpStatus'
  | 'virtuals___links___version'
  | 'virtuals___links___generatedAt'
  | 'virtuals___isLockedPreviewOnly'
  | 'virtuals___metaDescription'
  | 'virtuals___totalClapCount'
  | 'virtuals___sectionCount'
  | 'virtuals___readingList'
  | 'virtuals___topics'
  | 'virtuals___topics___topicId'
  | 'virtuals___topics___slug'
  | 'virtuals___topics___createdAt'
  | 'virtuals___topics___deletedAt'
  | 'virtuals___topics___image___id'
  | 'virtuals___topics___image___originalWidth'
  | 'virtuals___topics___image___originalHeight'
  | 'virtuals___topics___name'
  | 'virtuals___topics___description'
  | 'virtuals___topics___visibility'
  | 'virtuals___topics___type'
  | 'coverless'
  | 'slug'
  | 'translationSourcePostId'
  | 'translationSourceCreatorId'
  | 'isApprovedTranslation'
  | 'inResponseToPostId'
  | 'inResponseToRemovedAt'
  | 'isTitleSynthesized'
  | 'allowResponses'
  | 'importedUrl'
  | 'importedPublishedAt'
  | 'visibility'
  | 'uniqueSlug'
  | 'previewContent___bodyModel___paragraphs'
  | 'previewContent___bodyModel___paragraphs___name'
  | 'previewContent___bodyModel___paragraphs___type'
  | 'previewContent___bodyModel___paragraphs___text'
  | 'previewContent___bodyModel___paragraphs___layout'
  | 'previewContent___bodyModel___paragraphs___markups'
  | 'previewContent___bodyModel___paragraphs___alignment'
  | 'previewContent___bodyModel___paragraphs___hasDropCap'
  | 'previewContent___bodyModel___sections'
  | 'previewContent___bodyModel___sections___startIndex'
  | 'previewContent___isFullContent'
  | 'previewContent___subtitle'
  | 'license'
  | 'inResponseToMediaResourceId'
  | 'canonicalUrl'
  | 'approvedHomeCollectionId'
  | 'newsletterId'
  | 'webCanonicalUrl'
  | 'mediumUrl'
  | 'migrationId'
  | 'notifyFollowers'
  | 'notifyTwitter'
  | 'notifyFacebook'
  | 'responseHiddenOnParentPostAt'
  | 'isSeries'
  | 'isSubscriptionLocked'
  | 'seriesLastAppendedAt'
  | 'audioVersionDurationSec'
  | 'sequenceId'
  | 'isEligibleForRevenue'
  | 'isBlockedFromHightower'
  | 'deletedAt'
  | 'lockedPostSource'
  | 'hightowerMinimumGuaranteeStartsAt'
  | 'hightowerMinimumGuaranteeEndsAt'
  | 'featureLockRequestAcceptedAt'
  | 'mongerRequestType'
  | 'layerCake'
  | 'socialTitle'
  | 'socialDek'
  | 'editorialPreviewTitle'
  | 'editorialPreviewDek'
  | 'isProxyPost'
  | 'proxyPostFaviconUrl'
  | 'proxyPostProviderName'
  | 'proxyPostType'
  | 'isSuspended'
  | 'isLimitedState'
  | 'seoTitle'
  | 'previewContent2___bodyModel___paragraphs'
  | 'previewContent2___bodyModel___paragraphs___name'
  | 'previewContent2___bodyModel___paragraphs___type'
  | 'previewContent2___bodyModel___paragraphs___text'
  | 'previewContent2___bodyModel___paragraphs___markups'
  | 'previewContent2___bodyModel___paragraphs___layout'
  | 'previewContent2___bodyModel___paragraphs___hasDropCap'
  | 'previewContent2___bodyModel___sections'
  | 'previewContent2___bodyModel___sections___startIndex'
  | 'previewContent2___bodyModel___sections___name'
  | 'previewContent2___isFullContent'
  | 'previewContent2___subtitle'
  | 'cardType'
  | 'isDistributionAlertDismissed'
  | 'isShortform'
  | 'shortformType'
  | 'type'
  | 'medium_id'
  | 'author___userId'
  | 'author___name'
  | 'author___username'
  | 'author___mediumMemberAt'
  | 'author___createdAt'
  | 'author___imageId'
  | 'author___backgroundImageId'
  | 'author___bio'
  | 'author___twitterScreenName'
  | 'author___allowNotes'
  | 'author___isWriterProgramEnrolled'
  | 'author___isSuspended'
  | 'author___isMembershipTrialEligible'
  | 'author___type'
  | 'author___posts'
  | 'author___posts___versionId'
  | 'author___posts___creatorId'
  | 'author___posts___homeCollectionId'
  | 'author___posts___title'
  | 'author___posts___detectedLanguage'
  | 'author___posts___latestVersion'
  | 'author___posts___latestPublishedVersion'
  | 'author___posts___hasUnpublishedEdits'
  | 'author___posts___latestRev'
  | 'author___posts___createdAt'
  | 'author___posts___updatedAt'
  | 'author___posts___acceptedAt'
  | 'author___posts___firstPublishedAt'
  | 'author___posts___latestPublishedAt'
  | 'author___posts___vote'
  | 'author___posts___experimentalCss'
  | 'author___posts___displayAuthor'
  | 'author___posts___content___subtitle'
  | 'author___posts___content___metaDescription'
  | 'author___posts___virtuals___statusForCollection'
  | 'author___posts___virtuals___allowNotes'
  | 'author___posts___virtuals___wordCount'
  | 'author___posts___virtuals___imageCount'
  | 'author___posts___virtuals___readingTime'
  | 'author___posts___virtuals___subtitle'
  | 'author___posts___virtuals___publishedInCount'
  | 'author___posts___virtuals___noIndex'
  | 'author___posts___virtuals___recommends'
  | 'author___posts___virtuals___isBookmarked'
  | 'author___posts___virtuals___tags'
  | 'author___posts___virtuals___socialRecommendsCount'
  | 'author___posts___virtuals___responsesCreatedCount'
  | 'author___posts___virtuals___isLockedPreviewOnly'
  | 'author___posts___virtuals___metaDescription'
  | 'author___posts___virtuals___totalClapCount'
  | 'author___posts___virtuals___sectionCount'
  | 'author___posts___virtuals___readingList'
  | 'author___posts___virtuals___topics'
  | 'author___posts___coverless'
  | 'author___posts___slug'
  | 'author___posts___translationSourcePostId'
  | 'author___posts___translationSourceCreatorId'
  | 'author___posts___isApprovedTranslation'
  | 'author___posts___inResponseToPostId'
  | 'author___posts___inResponseToRemovedAt'
  | 'author___posts___isTitleSynthesized'
  | 'author___posts___allowResponses'
  | 'author___posts___importedUrl'
  | 'author___posts___importedPublishedAt'
  | 'author___posts___visibility'
  | 'author___posts___uniqueSlug'
  | 'author___posts___previewContent___isFullContent'
  | 'author___posts___previewContent___subtitle'
  | 'author___posts___license'
  | 'author___posts___inResponseToMediaResourceId'
  | 'author___posts___canonicalUrl'
  | 'author___posts___approvedHomeCollectionId'
  | 'author___posts___newsletterId'
  | 'author___posts___webCanonicalUrl'
  | 'author___posts___mediumUrl'
  | 'author___posts___migrationId'
  | 'author___posts___notifyFollowers'
  | 'author___posts___notifyTwitter'
  | 'author___posts___notifyFacebook'
  | 'author___posts___responseHiddenOnParentPostAt'
  | 'author___posts___isSeries'
  | 'author___posts___isSubscriptionLocked'
  | 'author___posts___seriesLastAppendedAt'
  | 'author___posts___audioVersionDurationSec'
  | 'author___posts___sequenceId'
  | 'author___posts___isEligibleForRevenue'
  | 'author___posts___isBlockedFromHightower'
  | 'author___posts___deletedAt'
  | 'author___posts___lockedPostSource'
  | 'author___posts___hightowerMinimumGuaranteeStartsAt'
  | 'author___posts___hightowerMinimumGuaranteeEndsAt'
  | 'author___posts___featureLockRequestAcceptedAt'
  | 'author___posts___mongerRequestType'
  | 'author___posts___layerCake'
  | 'author___posts___socialTitle'
  | 'author___posts___socialDek'
  | 'author___posts___editorialPreviewTitle'
  | 'author___posts___editorialPreviewDek'
  | 'author___posts___isProxyPost'
  | 'author___posts___proxyPostFaviconUrl'
  | 'author___posts___proxyPostProviderName'
  | 'author___posts___proxyPostType'
  | 'author___posts___isSuspended'
  | 'author___posts___isLimitedState'
  | 'author___posts___seoTitle'
  | 'author___posts___previewContent2___isFullContent'
  | 'author___posts___previewContent2___subtitle'
  | 'author___posts___cardType'
  | 'author___posts___isDistributionAlertDismissed'
  | 'author___posts___isShortform'
  | 'author___posts___shortformType'
  | 'author___posts___type'
  | 'author___posts___medium_id'
  | 'author___posts___author___userId'
  | 'author___posts___author___name'
  | 'author___posts___author___username'
  | 'author___posts___author___mediumMemberAt'
  | 'author___posts___author___createdAt'
  | 'author___posts___author___imageId'
  | 'author___posts___author___backgroundImageId'
  | 'author___posts___author___bio'
  | 'author___posts___author___twitterScreenName'
  | 'author___posts___author___allowNotes'
  | 'author___posts___author___isWriterProgramEnrolled'
  | 'author___posts___author___isSuspended'
  | 'author___posts___author___isMembershipTrialEligible'
  | 'author___posts___author___type'
  | 'author___posts___author___posts'
  | 'author___posts___author___optInToIceland'
  | 'author___posts___author___hasCompletedProfile'
  | 'author___posts___author___hasSeenIcelandOnboarding'
  | 'author___posts___author___id'
  | 'author___posts___author___children'
  | 'author___posts___primaryTopicId'
  | 'author___posts___isNewsletter'
  | 'author___posts___responsesLocked'
  | 'author___posts___isLockedResponse'
  | 'author___posts___isPublishToEmail'
  | 'author___posts___responseDistribution'
  | 'author___posts___isMarkedPaywallOnly'
  | 'author___posts___id'
  | 'author___posts___parent___id'
  | 'author___posts___parent___children'
  | 'author___posts___children'
  | 'author___posts___children___id'
  | 'author___posts___children___children'
  | 'author___posts___internal___content'
  | 'author___posts___internal___contentDigest'
  | 'author___posts___internal___description'
  | 'author___posts___internal___fieldOwners'
  | 'author___posts___internal___ignoreType'
  | 'author___posts___internal___mediaType'
  | 'author___posts___internal___owner'
  | 'author___posts___internal___type'
  | 'author___optInToIceland'
  | 'author___hasCompletedProfile'
  | 'author___hasSeenIcelandOnboarding'
  | 'author___id'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'primaryTopicId'
  | 'isNewsletter'
  | 'responsesLocked'
  | 'isLockedResponse'
  | 'isPublishToEmail'
  | 'responseDistribution'
  | 'isMarkedPaywallOnly'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MediumPostFilterInput = {
  versionId?: Maybe<StringQueryOperatorInput>;
  creatorId?: Maybe<StringQueryOperatorInput>;
  homeCollectionId?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  detectedLanguage?: Maybe<StringQueryOperatorInput>;
  latestVersion?: Maybe<StringQueryOperatorInput>;
  latestPublishedVersion?: Maybe<StringQueryOperatorInput>;
  hasUnpublishedEdits?: Maybe<BooleanQueryOperatorInput>;
  latestRev?: Maybe<IntQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  acceptedAt?: Maybe<IntQueryOperatorInput>;
  firstPublishedAt?: Maybe<DateQueryOperatorInput>;
  latestPublishedAt?: Maybe<DateQueryOperatorInput>;
  vote?: Maybe<BooleanQueryOperatorInput>;
  experimentalCss?: Maybe<StringQueryOperatorInput>;
  displayAuthor?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<MediumPostContentFilterInput>;
  virtuals?: Maybe<MediumPostVirtualsFilterInput>;
  coverless?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  translationSourcePostId?: Maybe<StringQueryOperatorInput>;
  translationSourceCreatorId?: Maybe<StringQueryOperatorInput>;
  isApprovedTranslation?: Maybe<BooleanQueryOperatorInput>;
  inResponseToPostId?: Maybe<StringQueryOperatorInput>;
  inResponseToRemovedAt?: Maybe<IntQueryOperatorInput>;
  isTitleSynthesized?: Maybe<BooleanQueryOperatorInput>;
  allowResponses?: Maybe<BooleanQueryOperatorInput>;
  importedUrl?: Maybe<StringQueryOperatorInput>;
  importedPublishedAt?: Maybe<IntQueryOperatorInput>;
  visibility?: Maybe<IntQueryOperatorInput>;
  uniqueSlug?: Maybe<StringQueryOperatorInput>;
  previewContent?: Maybe<MediumPostPreviewContentFilterInput>;
  license?: Maybe<IntQueryOperatorInput>;
  inResponseToMediaResourceId?: Maybe<StringQueryOperatorInput>;
  canonicalUrl?: Maybe<StringQueryOperatorInput>;
  approvedHomeCollectionId?: Maybe<StringQueryOperatorInput>;
  newsletterId?: Maybe<StringQueryOperatorInput>;
  webCanonicalUrl?: Maybe<StringQueryOperatorInput>;
  mediumUrl?: Maybe<StringQueryOperatorInput>;
  migrationId?: Maybe<StringQueryOperatorInput>;
  notifyFollowers?: Maybe<BooleanQueryOperatorInput>;
  notifyTwitter?: Maybe<BooleanQueryOperatorInput>;
  notifyFacebook?: Maybe<BooleanQueryOperatorInput>;
  responseHiddenOnParentPostAt?: Maybe<IntQueryOperatorInput>;
  isSeries?: Maybe<BooleanQueryOperatorInput>;
  isSubscriptionLocked?: Maybe<BooleanQueryOperatorInput>;
  seriesLastAppendedAt?: Maybe<DateQueryOperatorInput>;
  audioVersionDurationSec?: Maybe<IntQueryOperatorInput>;
  sequenceId?: Maybe<StringQueryOperatorInput>;
  isEligibleForRevenue?: Maybe<BooleanQueryOperatorInput>;
  isBlockedFromHightower?: Maybe<BooleanQueryOperatorInput>;
  deletedAt?: Maybe<IntQueryOperatorInput>;
  lockedPostSource?: Maybe<IntQueryOperatorInput>;
  hightowerMinimumGuaranteeStartsAt?: Maybe<IntQueryOperatorInput>;
  hightowerMinimumGuaranteeEndsAt?: Maybe<IntQueryOperatorInput>;
  featureLockRequestAcceptedAt?: Maybe<IntQueryOperatorInput>;
  mongerRequestType?: Maybe<IntQueryOperatorInput>;
  layerCake?: Maybe<IntQueryOperatorInput>;
  socialTitle?: Maybe<StringQueryOperatorInput>;
  socialDek?: Maybe<StringQueryOperatorInput>;
  editorialPreviewTitle?: Maybe<StringQueryOperatorInput>;
  editorialPreviewDek?: Maybe<StringQueryOperatorInput>;
  isProxyPost?: Maybe<BooleanQueryOperatorInput>;
  proxyPostFaviconUrl?: Maybe<StringQueryOperatorInput>;
  proxyPostProviderName?: Maybe<StringQueryOperatorInput>;
  proxyPostType?: Maybe<IntQueryOperatorInput>;
  isSuspended?: Maybe<BooleanQueryOperatorInput>;
  isLimitedState?: Maybe<BooleanQueryOperatorInput>;
  seoTitle?: Maybe<StringQueryOperatorInput>;
  previewContent2?: Maybe<MediumPostPreviewContent2FilterInput>;
  cardType?: Maybe<IntQueryOperatorInput>;
  isDistributionAlertDismissed?: Maybe<BooleanQueryOperatorInput>;
  isShortform?: Maybe<BooleanQueryOperatorInput>;
  shortformType?: Maybe<IntQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  medium_id?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<MediumUserFilterInput>;
  primaryTopicId?: Maybe<StringQueryOperatorInput>;
  isNewsletter?: Maybe<BooleanQueryOperatorInput>;
  responsesLocked?: Maybe<BooleanQueryOperatorInput>;
  isLockedResponse?: Maybe<BooleanQueryOperatorInput>;
  isPublishToEmail?: Maybe<BooleanQueryOperatorInput>;
  responseDistribution?: Maybe<IntQueryOperatorInput>;
  isMarkedPaywallOnly?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MediumPostFilterListInput = {
  elemMatch?: Maybe<MediumPostFilterInput>;
};

export type MediumPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumPostEdge>;
  nodes: Array<MediumPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent = {
  bodyModel?: Maybe<MediumPostPreviewContentBodyModel>;
  isFullContent?: Maybe<Scalars['Boolean']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent2 = {
  bodyModel?: Maybe<MediumPostPreviewContent2BodyModel>;
  isFullContent?: Maybe<Scalars['Boolean']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent2BodyModel = {
  paragraphs?: Maybe<Array<Maybe<MediumPostPreviewContent2BodyModelParagraphs>>>;
  sections?: Maybe<Array<Maybe<MediumPostPreviewContent2BodyModelSections>>>;
};

export type MediumPostPreviewContent2BodyModelFilterInput = {
  paragraphs?: Maybe<MediumPostPreviewContent2BodyModelParagraphsFilterListInput>;
  sections?: Maybe<MediumPostPreviewContent2BodyModelSectionsFilterListInput>;
};

export type MediumPostPreviewContent2BodyModelParagraphs = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  markups?: Maybe<Array<Maybe<MediumPostPreviewContent2BodyModelParagraphsMarkups>>>;
  layout?: Maybe<Scalars['Int']>;
  metadata?: Maybe<MediumPostPreviewContent2BodyModelParagraphsMetadata>;
  hasDropCap?: Maybe<Scalars['Boolean']>;
};

export type MediumPostPreviewContent2BodyModelParagraphsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<IntQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  markups?: Maybe<MediumPostPreviewContent2BodyModelParagraphsMarkupsFilterListInput>;
  layout?: Maybe<IntQueryOperatorInput>;
  metadata?: Maybe<MediumPostPreviewContent2BodyModelParagraphsMetadataFilterInput>;
  hasDropCap?: Maybe<BooleanQueryOperatorInput>;
};

export type MediumPostPreviewContent2BodyModelParagraphsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContent2BodyModelParagraphsFilterInput>;
};

export type MediumPostPreviewContent2BodyModelParagraphsMarkups = {
  type?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  anchorType?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent2BodyModelParagraphsMarkupsFilterInput = {
  type?: Maybe<IntQueryOperatorInput>;
  start?: Maybe<IntQueryOperatorInput>;
  end?: Maybe<IntQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  rel?: Maybe<StringQueryOperatorInput>;
  anchorType?: Maybe<IntQueryOperatorInput>;
  userId?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostPreviewContent2BodyModelParagraphsMarkupsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContent2BodyModelParagraphsMarkupsFilterInput>;
};

export type MediumPostPreviewContent2BodyModelParagraphsMetadata = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  unsplashPhotoId?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent2BodyModelParagraphsMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  isFeatured?: Maybe<BooleanQueryOperatorInput>;
  unsplashPhotoId?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostPreviewContent2BodyModelSections = {
  startIndex?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent2BodyModelSectionsFilterInput = {
  startIndex?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostPreviewContent2BodyModelSectionsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContent2BodyModelSectionsFilterInput>;
};

export type MediumPostPreviewContent2FilterInput = {
  bodyModel?: Maybe<MediumPostPreviewContent2BodyModelFilterInput>;
  isFullContent?: Maybe<BooleanQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostPreviewContentBodyModel = {
  paragraphs?: Maybe<Array<Maybe<MediumPostPreviewContentBodyModelParagraphs>>>;
  sections?: Maybe<Array<Maybe<MediumPostPreviewContentBodyModelSections>>>;
};

export type MediumPostPreviewContentBodyModelFilterInput = {
  paragraphs?: Maybe<MediumPostPreviewContentBodyModelParagraphsFilterListInput>;
  sections?: Maybe<MediumPostPreviewContentBodyModelSectionsFilterListInput>;
};

export type MediumPostPreviewContentBodyModelParagraphs = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['Int']>;
  metadata?: Maybe<MediumPostPreviewContentBodyModelParagraphsMetadata>;
  markups?: Maybe<Array<Maybe<MediumPostPreviewContentBodyModelParagraphsMarkups>>>;
  alignment?: Maybe<Scalars['Int']>;
  hasDropCap?: Maybe<Scalars['Boolean']>;
};

export type MediumPostPreviewContentBodyModelParagraphsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<IntQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  layout?: Maybe<IntQueryOperatorInput>;
  metadata?: Maybe<MediumPostPreviewContentBodyModelParagraphsMetadataFilterInput>;
  markups?: Maybe<MediumPostPreviewContentBodyModelParagraphsMarkupsFilterListInput>;
  alignment?: Maybe<IntQueryOperatorInput>;
  hasDropCap?: Maybe<BooleanQueryOperatorInput>;
};

export type MediumPostPreviewContentBodyModelParagraphsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContentBodyModelParagraphsFilterInput>;
};

export type MediumPostPreviewContentBodyModelParagraphsMarkups = {
  type?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
};

export type MediumPostPreviewContentBodyModelParagraphsMarkupsFilterInput = {
  type?: Maybe<IntQueryOperatorInput>;
  start?: Maybe<IntQueryOperatorInput>;
  end?: Maybe<IntQueryOperatorInput>;
};

export type MediumPostPreviewContentBodyModelParagraphsMarkupsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContentBodyModelParagraphsMarkupsFilterInput>;
};

export type MediumPostPreviewContentBodyModelParagraphsMetadata = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  unsplashPhotoId?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContentBodyModelParagraphsMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  isFeatured?: Maybe<BooleanQueryOperatorInput>;
  unsplashPhotoId?: Maybe<StringQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostPreviewContentBodyModelSections = {
  startIndex?: Maybe<Scalars['Int']>;
};

export type MediumPostPreviewContentBodyModelSectionsFilterInput = {
  startIndex?: Maybe<IntQueryOperatorInput>;
};

export type MediumPostPreviewContentBodyModelSectionsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContentBodyModelSectionsFilterInput>;
};

export type MediumPostPreviewContentFilterInput = {
  bodyModel?: Maybe<MediumPostPreviewContentBodyModelFilterInput>;
  isFullContent?: Maybe<BooleanQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostSortInput = {
  fields?: Maybe<Array<Maybe<MediumPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MediumPostVirtuals = {
  statusForCollection?: Maybe<Scalars['String']>;
  allowNotes?: Maybe<Scalars['Boolean']>;
  previewImage?: Maybe<MediumPostVirtualsPreviewImage>;
  wordCount?: Maybe<Scalars['Int']>;
  imageCount?: Maybe<Scalars['Int']>;
  readingTime?: Maybe<Scalars['Float']>;
  subtitle?: Maybe<Scalars['String']>;
  publishedInCount?: Maybe<Scalars['Int']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  recommends?: Maybe<Scalars['Int']>;
  isBookmarked?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<MediumPostVirtualsTags>>>;
  socialRecommendsCount?: Maybe<Scalars['Int']>;
  responsesCreatedCount?: Maybe<Scalars['Int']>;
  links?: Maybe<MediumPostVirtualsLinks>;
  isLockedPreviewOnly?: Maybe<Scalars['Boolean']>;
  metaDescription?: Maybe<Scalars['String']>;
  totalClapCount?: Maybe<Scalars['Int']>;
  sectionCount?: Maybe<Scalars['Int']>;
  readingList?: Maybe<Scalars['Int']>;
  topics?: Maybe<Array<Maybe<MediumPostVirtualsTopics>>>;
};

export type MediumPostVirtualsFilterInput = {
  statusForCollection?: Maybe<StringQueryOperatorInput>;
  allowNotes?: Maybe<BooleanQueryOperatorInput>;
  previewImage?: Maybe<MediumPostVirtualsPreviewImageFilterInput>;
  wordCount?: Maybe<IntQueryOperatorInput>;
  imageCount?: Maybe<IntQueryOperatorInput>;
  readingTime?: Maybe<FloatQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  publishedInCount?: Maybe<IntQueryOperatorInput>;
  noIndex?: Maybe<BooleanQueryOperatorInput>;
  recommends?: Maybe<IntQueryOperatorInput>;
  isBookmarked?: Maybe<BooleanQueryOperatorInput>;
  tags?: Maybe<MediumPostVirtualsTagsFilterListInput>;
  socialRecommendsCount?: Maybe<IntQueryOperatorInput>;
  responsesCreatedCount?: Maybe<IntQueryOperatorInput>;
  links?: Maybe<MediumPostVirtualsLinksFilterInput>;
  isLockedPreviewOnly?: Maybe<BooleanQueryOperatorInput>;
  metaDescription?: Maybe<StringQueryOperatorInput>;
  totalClapCount?: Maybe<IntQueryOperatorInput>;
  sectionCount?: Maybe<IntQueryOperatorInput>;
  readingList?: Maybe<IntQueryOperatorInput>;
  topics?: Maybe<MediumPostVirtualsTopicsFilterListInput>;
};

export type MediumPostVirtualsLinks = {
  entries?: Maybe<Array<Maybe<MediumPostVirtualsLinksEntries>>>;
  version?: Maybe<Scalars['String']>;
  generatedAt?: Maybe<Scalars['Date']>;
};


export type MediumPostVirtualsLinksGeneratedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumPostVirtualsLinksEntries = {
  url?: Maybe<Scalars['String']>;
  alts?: Maybe<Array<Maybe<MediumPostVirtualsLinksEntriesAlts>>>;
  httpStatus?: Maybe<Scalars['Int']>;
};

export type MediumPostVirtualsLinksEntriesAlts = {
  type?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type MediumPostVirtualsLinksEntriesAltsFilterInput = {
  type?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostVirtualsLinksEntriesAltsFilterListInput = {
  elemMatch?: Maybe<MediumPostVirtualsLinksEntriesAltsFilterInput>;
};

export type MediumPostVirtualsLinksEntriesFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  alts?: Maybe<MediumPostVirtualsLinksEntriesAltsFilterListInput>;
  httpStatus?: Maybe<IntQueryOperatorInput>;
};

export type MediumPostVirtualsLinksEntriesFilterListInput = {
  elemMatch?: Maybe<MediumPostVirtualsLinksEntriesFilterInput>;
};

export type MediumPostVirtualsLinksFilterInput = {
  entries?: Maybe<MediumPostVirtualsLinksEntriesFilterListInput>;
  version?: Maybe<StringQueryOperatorInput>;
  generatedAt?: Maybe<DateQueryOperatorInput>;
};

export type MediumPostVirtualsPreviewImage = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumPostVirtualsPreviewImageFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumPostVirtualsTags = {
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  postCount?: Maybe<Scalars['Int']>;
  metadata?: Maybe<MediumPostVirtualsTagsMetadata>;
  type?: Maybe<Scalars['String']>;
};

export type MediumPostVirtualsTagsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
  metadata?: Maybe<MediumPostVirtualsTagsMetadataFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostVirtualsTagsFilterListInput = {
  elemMatch?: Maybe<MediumPostVirtualsTagsFilterInput>;
};

export type MediumPostVirtualsTagsMetadata = {
  postCount?: Maybe<Scalars['Int']>;
  coverImage?: Maybe<MediumPostVirtualsTagsMetadataCoverImage>;
};

export type MediumPostVirtualsTagsMetadataCoverImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  unsplashPhotoId?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type MediumPostVirtualsTagsMetadataCoverImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  isFeatured?: Maybe<BooleanQueryOperatorInput>;
  unsplashPhotoId?: Maybe<StringQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostVirtualsTagsMetadataFilterInput = {
  postCount?: Maybe<IntQueryOperatorInput>;
  coverImage?: Maybe<MediumPostVirtualsTagsMetadataCoverImageFilterInput>;
};

export type MediumPostVirtualsTopics = {
  topicId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Int']>;
  image?: Maybe<MediumPostVirtualsTopicsImage>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};


export type MediumPostVirtualsTopicsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumPostVirtualsTopicsFilterInput = {
  topicId?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  deletedAt?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<MediumPostVirtualsTopicsImageFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  visibility?: Maybe<IntQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostVirtualsTopicsFilterListInput = {
  elemMatch?: Maybe<MediumPostVirtualsTopicsFilterInput>;
};

export type MediumPostVirtualsTopicsImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
};

export type MediumPostVirtualsTopicsImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
};

export type MediumUser = Node & {
  userId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  mediumMemberAt?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  imageId?: Maybe<Scalars['String']>;
  backgroundImageId?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  twitterScreenName?: Maybe<Scalars['String']>;
  allowNotes?: Maybe<Scalars['Int']>;
  isWriterProgramEnrolled?: Maybe<Scalars['Boolean']>;
  isSuspended?: Maybe<Scalars['Boolean']>;
  isMembershipTrialEligible?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<MediumPost>>>;
  optInToIceland?: Maybe<Scalars['Boolean']>;
  hasCompletedProfile?: Maybe<Scalars['Boolean']>;
  hasSeenIcelandOnboarding?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MediumUserCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumUserConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumUserEdge>;
  nodes: Array<MediumUser>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MediumUserGroupConnection>;
};


export type MediumUserConnectionDistinctArgs = {
  field: MediumUserFieldsEnum;
};


export type MediumUserConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MediumUserFieldsEnum;
};

export type MediumUserEdge = {
  next?: Maybe<MediumUser>;
  node: MediumUser;
  previous?: Maybe<MediumUser>;
};

export type MediumUserFieldsEnum =
  | 'userId'
  | 'name'
  | 'username'
  | 'mediumMemberAt'
  | 'createdAt'
  | 'imageId'
  | 'backgroundImageId'
  | 'bio'
  | 'twitterScreenName'
  | 'allowNotes'
  | 'isWriterProgramEnrolled'
  | 'isSuspended'
  | 'isMembershipTrialEligible'
  | 'type'
  | 'posts'
  | 'posts___versionId'
  | 'posts___creatorId'
  | 'posts___homeCollectionId'
  | 'posts___title'
  | 'posts___detectedLanguage'
  | 'posts___latestVersion'
  | 'posts___latestPublishedVersion'
  | 'posts___hasUnpublishedEdits'
  | 'posts___latestRev'
  | 'posts___createdAt'
  | 'posts___updatedAt'
  | 'posts___acceptedAt'
  | 'posts___firstPublishedAt'
  | 'posts___latestPublishedAt'
  | 'posts___vote'
  | 'posts___experimentalCss'
  | 'posts___displayAuthor'
  | 'posts___content___subtitle'
  | 'posts___content___postDisplay___coverless'
  | 'posts___content___metaDescription'
  | 'posts___virtuals___statusForCollection'
  | 'posts___virtuals___allowNotes'
  | 'posts___virtuals___previewImage___imageId'
  | 'posts___virtuals___previewImage___filter'
  | 'posts___virtuals___previewImage___backgroundSize'
  | 'posts___virtuals___previewImage___originalWidth'
  | 'posts___virtuals___previewImage___originalHeight'
  | 'posts___virtuals___previewImage___strategy'
  | 'posts___virtuals___previewImage___height'
  | 'posts___virtuals___previewImage___width'
  | 'posts___virtuals___wordCount'
  | 'posts___virtuals___imageCount'
  | 'posts___virtuals___readingTime'
  | 'posts___virtuals___subtitle'
  | 'posts___virtuals___publishedInCount'
  | 'posts___virtuals___noIndex'
  | 'posts___virtuals___recommends'
  | 'posts___virtuals___isBookmarked'
  | 'posts___virtuals___tags'
  | 'posts___virtuals___tags___slug'
  | 'posts___virtuals___tags___name'
  | 'posts___virtuals___tags___postCount'
  | 'posts___virtuals___tags___type'
  | 'posts___virtuals___socialRecommendsCount'
  | 'posts___virtuals___responsesCreatedCount'
  | 'posts___virtuals___links___entries'
  | 'posts___virtuals___links___version'
  | 'posts___virtuals___links___generatedAt'
  | 'posts___virtuals___isLockedPreviewOnly'
  | 'posts___virtuals___metaDescription'
  | 'posts___virtuals___totalClapCount'
  | 'posts___virtuals___sectionCount'
  | 'posts___virtuals___readingList'
  | 'posts___virtuals___topics'
  | 'posts___virtuals___topics___topicId'
  | 'posts___virtuals___topics___slug'
  | 'posts___virtuals___topics___createdAt'
  | 'posts___virtuals___topics___deletedAt'
  | 'posts___virtuals___topics___name'
  | 'posts___virtuals___topics___description'
  | 'posts___virtuals___topics___visibility'
  | 'posts___virtuals___topics___type'
  | 'posts___coverless'
  | 'posts___slug'
  | 'posts___translationSourcePostId'
  | 'posts___translationSourceCreatorId'
  | 'posts___isApprovedTranslation'
  | 'posts___inResponseToPostId'
  | 'posts___inResponseToRemovedAt'
  | 'posts___isTitleSynthesized'
  | 'posts___allowResponses'
  | 'posts___importedUrl'
  | 'posts___importedPublishedAt'
  | 'posts___visibility'
  | 'posts___uniqueSlug'
  | 'posts___previewContent___bodyModel___paragraphs'
  | 'posts___previewContent___bodyModel___sections'
  | 'posts___previewContent___isFullContent'
  | 'posts___previewContent___subtitle'
  | 'posts___license'
  | 'posts___inResponseToMediaResourceId'
  | 'posts___canonicalUrl'
  | 'posts___approvedHomeCollectionId'
  | 'posts___newsletterId'
  | 'posts___webCanonicalUrl'
  | 'posts___mediumUrl'
  | 'posts___migrationId'
  | 'posts___notifyFollowers'
  | 'posts___notifyTwitter'
  | 'posts___notifyFacebook'
  | 'posts___responseHiddenOnParentPostAt'
  | 'posts___isSeries'
  | 'posts___isSubscriptionLocked'
  | 'posts___seriesLastAppendedAt'
  | 'posts___audioVersionDurationSec'
  | 'posts___sequenceId'
  | 'posts___isEligibleForRevenue'
  | 'posts___isBlockedFromHightower'
  | 'posts___deletedAt'
  | 'posts___lockedPostSource'
  | 'posts___hightowerMinimumGuaranteeStartsAt'
  | 'posts___hightowerMinimumGuaranteeEndsAt'
  | 'posts___featureLockRequestAcceptedAt'
  | 'posts___mongerRequestType'
  | 'posts___layerCake'
  | 'posts___socialTitle'
  | 'posts___socialDek'
  | 'posts___editorialPreviewTitle'
  | 'posts___editorialPreviewDek'
  | 'posts___isProxyPost'
  | 'posts___proxyPostFaviconUrl'
  | 'posts___proxyPostProviderName'
  | 'posts___proxyPostType'
  | 'posts___isSuspended'
  | 'posts___isLimitedState'
  | 'posts___seoTitle'
  | 'posts___previewContent2___bodyModel___paragraphs'
  | 'posts___previewContent2___bodyModel___sections'
  | 'posts___previewContent2___isFullContent'
  | 'posts___previewContent2___subtitle'
  | 'posts___cardType'
  | 'posts___isDistributionAlertDismissed'
  | 'posts___isShortform'
  | 'posts___shortformType'
  | 'posts___type'
  | 'posts___medium_id'
  | 'posts___author___userId'
  | 'posts___author___name'
  | 'posts___author___username'
  | 'posts___author___mediumMemberAt'
  | 'posts___author___createdAt'
  | 'posts___author___imageId'
  | 'posts___author___backgroundImageId'
  | 'posts___author___bio'
  | 'posts___author___twitterScreenName'
  | 'posts___author___allowNotes'
  | 'posts___author___isWriterProgramEnrolled'
  | 'posts___author___isSuspended'
  | 'posts___author___isMembershipTrialEligible'
  | 'posts___author___type'
  | 'posts___author___posts'
  | 'posts___author___posts___versionId'
  | 'posts___author___posts___creatorId'
  | 'posts___author___posts___homeCollectionId'
  | 'posts___author___posts___title'
  | 'posts___author___posts___detectedLanguage'
  | 'posts___author___posts___latestVersion'
  | 'posts___author___posts___latestPublishedVersion'
  | 'posts___author___posts___hasUnpublishedEdits'
  | 'posts___author___posts___latestRev'
  | 'posts___author___posts___createdAt'
  | 'posts___author___posts___updatedAt'
  | 'posts___author___posts___acceptedAt'
  | 'posts___author___posts___firstPublishedAt'
  | 'posts___author___posts___latestPublishedAt'
  | 'posts___author___posts___vote'
  | 'posts___author___posts___experimentalCss'
  | 'posts___author___posts___displayAuthor'
  | 'posts___author___posts___coverless'
  | 'posts___author___posts___slug'
  | 'posts___author___posts___translationSourcePostId'
  | 'posts___author___posts___translationSourceCreatorId'
  | 'posts___author___posts___isApprovedTranslation'
  | 'posts___author___posts___inResponseToPostId'
  | 'posts___author___posts___inResponseToRemovedAt'
  | 'posts___author___posts___isTitleSynthesized'
  | 'posts___author___posts___allowResponses'
  | 'posts___author___posts___importedUrl'
  | 'posts___author___posts___importedPublishedAt'
  | 'posts___author___posts___visibility'
  | 'posts___author___posts___uniqueSlug'
  | 'posts___author___posts___license'
  | 'posts___author___posts___inResponseToMediaResourceId'
  | 'posts___author___posts___canonicalUrl'
  | 'posts___author___posts___approvedHomeCollectionId'
  | 'posts___author___posts___newsletterId'
  | 'posts___author___posts___webCanonicalUrl'
  | 'posts___author___posts___mediumUrl'
  | 'posts___author___posts___migrationId'
  | 'posts___author___posts___notifyFollowers'
  | 'posts___author___posts___notifyTwitter'
  | 'posts___author___posts___notifyFacebook'
  | 'posts___author___posts___responseHiddenOnParentPostAt'
  | 'posts___author___posts___isSeries'
  | 'posts___author___posts___isSubscriptionLocked'
  | 'posts___author___posts___seriesLastAppendedAt'
  | 'posts___author___posts___audioVersionDurationSec'
  | 'posts___author___posts___sequenceId'
  | 'posts___author___posts___isEligibleForRevenue'
  | 'posts___author___posts___isBlockedFromHightower'
  | 'posts___author___posts___deletedAt'
  | 'posts___author___posts___lockedPostSource'
  | 'posts___author___posts___hightowerMinimumGuaranteeStartsAt'
  | 'posts___author___posts___hightowerMinimumGuaranteeEndsAt'
  | 'posts___author___posts___featureLockRequestAcceptedAt'
  | 'posts___author___posts___mongerRequestType'
  | 'posts___author___posts___layerCake'
  | 'posts___author___posts___socialTitle'
  | 'posts___author___posts___socialDek'
  | 'posts___author___posts___editorialPreviewTitle'
  | 'posts___author___posts___editorialPreviewDek'
  | 'posts___author___posts___isProxyPost'
  | 'posts___author___posts___proxyPostFaviconUrl'
  | 'posts___author___posts___proxyPostProviderName'
  | 'posts___author___posts___proxyPostType'
  | 'posts___author___posts___isSuspended'
  | 'posts___author___posts___isLimitedState'
  | 'posts___author___posts___seoTitle'
  | 'posts___author___posts___cardType'
  | 'posts___author___posts___isDistributionAlertDismissed'
  | 'posts___author___posts___isShortform'
  | 'posts___author___posts___shortformType'
  | 'posts___author___posts___type'
  | 'posts___author___posts___medium_id'
  | 'posts___author___posts___primaryTopicId'
  | 'posts___author___posts___isNewsletter'
  | 'posts___author___posts___responsesLocked'
  | 'posts___author___posts___isLockedResponse'
  | 'posts___author___posts___isPublishToEmail'
  | 'posts___author___posts___responseDistribution'
  | 'posts___author___posts___isMarkedPaywallOnly'
  | 'posts___author___posts___id'
  | 'posts___author___posts___children'
  | 'posts___author___optInToIceland'
  | 'posts___author___hasCompletedProfile'
  | 'posts___author___hasSeenIcelandOnboarding'
  | 'posts___author___id'
  | 'posts___author___parent___id'
  | 'posts___author___parent___children'
  | 'posts___author___children'
  | 'posts___author___children___id'
  | 'posts___author___children___children'
  | 'posts___author___internal___content'
  | 'posts___author___internal___contentDigest'
  | 'posts___author___internal___description'
  | 'posts___author___internal___fieldOwners'
  | 'posts___author___internal___ignoreType'
  | 'posts___author___internal___mediaType'
  | 'posts___author___internal___owner'
  | 'posts___author___internal___type'
  | 'posts___primaryTopicId'
  | 'posts___isNewsletter'
  | 'posts___responsesLocked'
  | 'posts___isLockedResponse'
  | 'posts___isPublishToEmail'
  | 'posts___responseDistribution'
  | 'posts___isMarkedPaywallOnly'
  | 'posts___id'
  | 'posts___parent___id'
  | 'posts___parent___parent___id'
  | 'posts___parent___parent___children'
  | 'posts___parent___children'
  | 'posts___parent___children___id'
  | 'posts___parent___children___children'
  | 'posts___parent___internal___content'
  | 'posts___parent___internal___contentDigest'
  | 'posts___parent___internal___description'
  | 'posts___parent___internal___fieldOwners'
  | 'posts___parent___internal___ignoreType'
  | 'posts___parent___internal___mediaType'
  | 'posts___parent___internal___owner'
  | 'posts___parent___internal___type'
  | 'posts___children'
  | 'posts___children___id'
  | 'posts___children___parent___id'
  | 'posts___children___parent___children'
  | 'posts___children___children'
  | 'posts___children___children___id'
  | 'posts___children___children___children'
  | 'posts___children___internal___content'
  | 'posts___children___internal___contentDigest'
  | 'posts___children___internal___description'
  | 'posts___children___internal___fieldOwners'
  | 'posts___children___internal___ignoreType'
  | 'posts___children___internal___mediaType'
  | 'posts___children___internal___owner'
  | 'posts___children___internal___type'
  | 'posts___internal___content'
  | 'posts___internal___contentDigest'
  | 'posts___internal___description'
  | 'posts___internal___fieldOwners'
  | 'posts___internal___ignoreType'
  | 'posts___internal___mediaType'
  | 'posts___internal___owner'
  | 'posts___internal___type'
  | 'optInToIceland'
  | 'hasCompletedProfile'
  | 'hasSeenIcelandOnboarding'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MediumUserFilterInput = {
  userId?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  mediumMemberAt?: Maybe<IntQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  imageId?: Maybe<StringQueryOperatorInput>;
  backgroundImageId?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  twitterScreenName?: Maybe<StringQueryOperatorInput>;
  allowNotes?: Maybe<IntQueryOperatorInput>;
  isWriterProgramEnrolled?: Maybe<BooleanQueryOperatorInput>;
  isSuspended?: Maybe<BooleanQueryOperatorInput>;
  isMembershipTrialEligible?: Maybe<BooleanQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<MediumPostFilterListInput>;
  optInToIceland?: Maybe<BooleanQueryOperatorInput>;
  hasCompletedProfile?: Maybe<BooleanQueryOperatorInput>;
  hasSeenIcelandOnboarding?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MediumUserGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumUserEdge>;
  nodes: Array<MediumUser>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MediumUserSortInput = {
  fields?: Maybe<Array<Maybe<MediumUserFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  mediumCollection?: Maybe<MediumCollection>;
  allMediumCollection: MediumCollectionConnection;
  mediumUser?: Maybe<MediumUser>;
  allMediumUser: MediumUserConnection;
  mediumPost?: Maybe<MediumPost>;
  allMediumPost: MediumPostConnection;
  themeUiConfig?: Maybe<ThemeUiConfig>;
  allThemeUiConfig: ThemeUiConfigConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  locale?: Maybe<Locale>;
  allLocale: LocaleConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  childrenLocale?: Maybe<LocaleFilterListInput>;
  childLocale?: Maybe<LocaleFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMediumCollectionArgs = {
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  creatorId?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  shortDescription?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<MediumCollectionImageFilterInput>;
  metadata?: Maybe<MediumCollectionMetadataFilterInput>;
  virtuals?: Maybe<MediumCollectionVirtualsFilterInput>;
  logo?: Maybe<MediumCollectionLogoFilterInput>;
  twitterUsername?: Maybe<StringQueryOperatorInput>;
  facebookPageName?: Maybe<StringQueryOperatorInput>;
  publicEmail?: Maybe<StringQueryOperatorInput>;
  domain?: Maybe<StringQueryOperatorInput>;
  sections?: Maybe<MediumCollectionSectionsFilterListInput>;
  tintColor?: Maybe<StringQueryOperatorInput>;
  lightText?: Maybe<BooleanQueryOperatorInput>;
  favicon?: Maybe<MediumCollectionFaviconFilterInput>;
  colorPalette?: Maybe<MediumCollectionColorPaletteFilterInput>;
  navItems?: Maybe<MediumCollectionNavItemsFilterListInput>;
  colorBehavior?: Maybe<IntQueryOperatorInput>;
  instantArticlesState?: Maybe<IntQueryOperatorInput>;
  acceleratedMobilePagesState?: Maybe<IntQueryOperatorInput>;
  ampLogo?: Maybe<MediumCollectionAmpLogoFilterInput>;
  header?: Maybe<MediumCollectionHeaderFilterInput>;
  paidForDomainAt?: Maybe<DateQueryOperatorInput>;
  subscriberCount?: Maybe<IntQueryOperatorInput>;
  tagline?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  medium_id?: Maybe<StringQueryOperatorInput>;
  collectionMastheadId?: Maybe<StringQueryOperatorInput>;
  polarisCoverImage?: Maybe<MediumCollectionPolarisCoverImageFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMediumCollectionArgs = {
  filter?: Maybe<MediumCollectionFilterInput>;
  sort?: Maybe<MediumCollectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMediumUserArgs = {
  userId?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  mediumMemberAt?: Maybe<IntQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  imageId?: Maybe<StringQueryOperatorInput>;
  backgroundImageId?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  twitterScreenName?: Maybe<StringQueryOperatorInput>;
  allowNotes?: Maybe<IntQueryOperatorInput>;
  isWriterProgramEnrolled?: Maybe<BooleanQueryOperatorInput>;
  isSuspended?: Maybe<BooleanQueryOperatorInput>;
  isMembershipTrialEligible?: Maybe<BooleanQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<MediumPostFilterListInput>;
  optInToIceland?: Maybe<BooleanQueryOperatorInput>;
  hasCompletedProfile?: Maybe<BooleanQueryOperatorInput>;
  hasSeenIcelandOnboarding?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMediumUserArgs = {
  filter?: Maybe<MediumUserFilterInput>;
  sort?: Maybe<MediumUserSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMediumPostArgs = {
  versionId?: Maybe<StringQueryOperatorInput>;
  creatorId?: Maybe<StringQueryOperatorInput>;
  homeCollectionId?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  detectedLanguage?: Maybe<StringQueryOperatorInput>;
  latestVersion?: Maybe<StringQueryOperatorInput>;
  latestPublishedVersion?: Maybe<StringQueryOperatorInput>;
  hasUnpublishedEdits?: Maybe<BooleanQueryOperatorInput>;
  latestRev?: Maybe<IntQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  acceptedAt?: Maybe<IntQueryOperatorInput>;
  firstPublishedAt?: Maybe<DateQueryOperatorInput>;
  latestPublishedAt?: Maybe<DateQueryOperatorInput>;
  vote?: Maybe<BooleanQueryOperatorInput>;
  experimentalCss?: Maybe<StringQueryOperatorInput>;
  displayAuthor?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<MediumPostContentFilterInput>;
  virtuals?: Maybe<MediumPostVirtualsFilterInput>;
  coverless?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  translationSourcePostId?: Maybe<StringQueryOperatorInput>;
  translationSourceCreatorId?: Maybe<StringQueryOperatorInput>;
  isApprovedTranslation?: Maybe<BooleanQueryOperatorInput>;
  inResponseToPostId?: Maybe<StringQueryOperatorInput>;
  inResponseToRemovedAt?: Maybe<IntQueryOperatorInput>;
  isTitleSynthesized?: Maybe<BooleanQueryOperatorInput>;
  allowResponses?: Maybe<BooleanQueryOperatorInput>;
  importedUrl?: Maybe<StringQueryOperatorInput>;
  importedPublishedAt?: Maybe<IntQueryOperatorInput>;
  visibility?: Maybe<IntQueryOperatorInput>;
  uniqueSlug?: Maybe<StringQueryOperatorInput>;
  previewContent?: Maybe<MediumPostPreviewContentFilterInput>;
  license?: Maybe<IntQueryOperatorInput>;
  inResponseToMediaResourceId?: Maybe<StringQueryOperatorInput>;
  canonicalUrl?: Maybe<StringQueryOperatorInput>;
  approvedHomeCollectionId?: Maybe<StringQueryOperatorInput>;
  newsletterId?: Maybe<StringQueryOperatorInput>;
  webCanonicalUrl?: Maybe<StringQueryOperatorInput>;
  mediumUrl?: Maybe<StringQueryOperatorInput>;
  migrationId?: Maybe<StringQueryOperatorInput>;
  notifyFollowers?: Maybe<BooleanQueryOperatorInput>;
  notifyTwitter?: Maybe<BooleanQueryOperatorInput>;
  notifyFacebook?: Maybe<BooleanQueryOperatorInput>;
  responseHiddenOnParentPostAt?: Maybe<IntQueryOperatorInput>;
  isSeries?: Maybe<BooleanQueryOperatorInput>;
  isSubscriptionLocked?: Maybe<BooleanQueryOperatorInput>;
  seriesLastAppendedAt?: Maybe<DateQueryOperatorInput>;
  audioVersionDurationSec?: Maybe<IntQueryOperatorInput>;
  sequenceId?: Maybe<StringQueryOperatorInput>;
  isEligibleForRevenue?: Maybe<BooleanQueryOperatorInput>;
  isBlockedFromHightower?: Maybe<BooleanQueryOperatorInput>;
  deletedAt?: Maybe<IntQueryOperatorInput>;
  lockedPostSource?: Maybe<IntQueryOperatorInput>;
  hightowerMinimumGuaranteeStartsAt?: Maybe<IntQueryOperatorInput>;
  hightowerMinimumGuaranteeEndsAt?: Maybe<IntQueryOperatorInput>;
  featureLockRequestAcceptedAt?: Maybe<IntQueryOperatorInput>;
  mongerRequestType?: Maybe<IntQueryOperatorInput>;
  layerCake?: Maybe<IntQueryOperatorInput>;
  socialTitle?: Maybe<StringQueryOperatorInput>;
  socialDek?: Maybe<StringQueryOperatorInput>;
  editorialPreviewTitle?: Maybe<StringQueryOperatorInput>;
  editorialPreviewDek?: Maybe<StringQueryOperatorInput>;
  isProxyPost?: Maybe<BooleanQueryOperatorInput>;
  proxyPostFaviconUrl?: Maybe<StringQueryOperatorInput>;
  proxyPostProviderName?: Maybe<StringQueryOperatorInput>;
  proxyPostType?: Maybe<IntQueryOperatorInput>;
  isSuspended?: Maybe<BooleanQueryOperatorInput>;
  isLimitedState?: Maybe<BooleanQueryOperatorInput>;
  seoTitle?: Maybe<StringQueryOperatorInput>;
  previewContent2?: Maybe<MediumPostPreviewContent2FilterInput>;
  cardType?: Maybe<IntQueryOperatorInput>;
  isDistributionAlertDismissed?: Maybe<BooleanQueryOperatorInput>;
  isShortform?: Maybe<BooleanQueryOperatorInput>;
  shortformType?: Maybe<IntQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  medium_id?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<MediumUserFilterInput>;
  primaryTopicId?: Maybe<StringQueryOperatorInput>;
  isNewsletter?: Maybe<BooleanQueryOperatorInput>;
  responsesLocked?: Maybe<BooleanQueryOperatorInput>;
  isLockedResponse?: Maybe<BooleanQueryOperatorInput>;
  isPublishToEmail?: Maybe<BooleanQueryOperatorInput>;
  responseDistribution?: Maybe<IntQueryOperatorInput>;
  isMarkedPaywallOnly?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMediumPostArgs = {
  filter?: Maybe<MediumPostFilterInput>;
  sort?: Maybe<MediumPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryThemeUiConfigArgs = {
  preset?: Maybe<JsonQueryOperatorInput>;
  prismPreset?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllThemeUiConfigArgs = {
  filter?: Maybe<ThemeUiConfigFilterInput>;
  sort?: Maybe<ThemeUiConfigSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryLocaleArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  language?: Maybe<StringQueryOperatorInput>;
  ns?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllLocaleArgs = {
  filter?: Maybe<LocaleFilterInput>;
  sort?: Maybe<LocaleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  i18n?: Maybe<SitePageContextI18n>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  i18n?: Maybe<SitePageContextI18nFilterInput>;
};

export type SitePageContextI18n = {
  language?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLanguage?: Maybe<Scalars['String']>;
  generateDefaultLanguagePage?: Maybe<Scalars['Boolean']>;
  routed?: Maybe<Scalars['Boolean']>;
  originalPath?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
  generateDefaultLanguagePage?: Maybe<BooleanQueryOperatorInput>;
  routed?: Maybe<BooleanQueryOperatorInput>;
  originalPath?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___slug'
  | 'context___language'
  | 'context___i18n___language'
  | 'context___i18n___languages'
  | 'context___i18n___defaultLanguage'
  | 'context___i18n___generateDefaultLanguagePage'
  | 'context___i18n___routed'
  | 'context___i18n___originalPath'
  | 'context___i18n___path'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___username'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___localeJsonSourceName'
  | 'pluginCreator___pluginOptions___languages'
  | 'pluginCreator___pluginOptions___defaultLanguage'
  | 'pluginCreator___pluginOptions___siteUrl'
  | 'pluginCreator___pluginOptions___i18nextOptions___returnObjects'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___custom___families'
  | 'pluginCreator___pluginOptions___custom___urls'
  | 'pluginCreator___pluginOptions___extensions'
  | 'pluginCreator___pluginOptions___lessBabel'
  | 'pluginCreator___pluginOptions___mediaTypes'
  | 'pluginCreator___pluginOptions___root'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___fileName'
  | 'pluginOptions___username'
  | 'pluginOptions___preset___base___space'
  | 'pluginOptions___preset___base___fontSizes'
  | 'pluginOptions___preset___default___space'
  | 'pluginOptions___preset___default___fontSizes'
  | 'pluginOptions___path'
  | 'pluginOptions___name'
  | 'pluginOptions___localeJsonSourceName'
  | 'pluginOptions___languages'
  | 'pluginOptions___defaultLanguage'
  | 'pluginOptions___siteUrl'
  | 'pluginOptions___i18nextOptions___interpolation___escapeValue'
  | 'pluginOptions___i18nextOptions___returnObjects'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___custom___families'
  | 'pluginOptions___custom___urls'
  | 'pluginOptions___extensions'
  | 'pluginOptions___lessBabel'
  | 'pluginOptions___mediaTypes'
  | 'pluginOptions___root'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  fileName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  preset?: Maybe<SitePluginPluginOptionsPreset>;
  path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  localeJsonSourceName?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLanguage?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  i18nextOptions?: Maybe<SitePluginPluginOptionsI18nextOptions>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  custom?: Maybe<SitePluginPluginOptionsCustom>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  lessBabel?: Maybe<Scalars['Boolean']>;
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  root?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsCustom = {
  families?: Maybe<Array<Maybe<Scalars['String']>>>;
  urls?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsCustomFilterInput = {
  families?: Maybe<StringQueryOperatorInput>;
  urls?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  fileName?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  preset?: Maybe<SitePluginPluginOptionsPresetFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  localeJsonSourceName?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  i18nextOptions?: Maybe<SitePluginPluginOptionsI18nextOptionsFilterInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  custom?: Maybe<SitePluginPluginOptionsCustomFilterInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  lessBabel?: Maybe<BooleanQueryOperatorInput>;
  mediaTypes?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsI18nextOptions = {
  interpolation?: Maybe<SitePluginPluginOptionsI18nextOptionsInterpolation>;
  returnObjects?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsI18nextOptionsFilterInput = {
  interpolation?: Maybe<SitePluginPluginOptionsI18nextOptionsInterpolationFilterInput>;
  returnObjects?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsI18nextOptionsInterpolation = {
  escapeValue?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsI18nextOptionsInterpolationFilterInput = {
  escapeValue?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPreset = {
  base?: Maybe<SitePluginPluginOptionsPresetBase>;
  default?: Maybe<SitePluginPluginOptionsPresetDefault>;
};

export type SitePluginPluginOptionsPresetBase = {
  space?: Maybe<Array<Maybe<Scalars['Int']>>>;
  fonts?: Maybe<SitePluginPluginOptionsPresetBaseFonts>;
  fontSizes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  fontWeights?: Maybe<SitePluginPluginOptionsPresetBaseFontWeights>;
  lineHeights?: Maybe<SitePluginPluginOptionsPresetBaseLineHeights>;
  colors?: Maybe<SitePluginPluginOptionsPresetBaseColors>;
  styles?: Maybe<SitePluginPluginOptionsPresetBaseStyles>;
};

export type SitePluginPluginOptionsPresetBaseColors = {
  text?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['String']>;
  secondary?: Maybe<Scalars['String']>;
  muted?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseColorsFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<StringQueryOperatorInput>;
  secondary?: Maybe<StringQueryOperatorInput>;
  muted?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseFilterInput = {
  space?: Maybe<IntQueryOperatorInput>;
  fonts?: Maybe<SitePluginPluginOptionsPresetBaseFontsFilterInput>;
  fontSizes?: Maybe<IntQueryOperatorInput>;
  fontWeights?: Maybe<SitePluginPluginOptionsPresetBaseFontWeightsFilterInput>;
  lineHeights?: Maybe<SitePluginPluginOptionsPresetBaseLineHeightsFilterInput>;
  colors?: Maybe<SitePluginPluginOptionsPresetBaseColorsFilterInput>;
  styles?: Maybe<SitePluginPluginOptionsPresetBaseStylesFilterInput>;
};

export type SitePluginPluginOptionsPresetBaseFonts = {
  body?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  monospace?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseFontsFilterInput = {
  body?: Maybe<StringQueryOperatorInput>;
  heading?: Maybe<StringQueryOperatorInput>;
  monospace?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseFontWeights = {
  body?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['Int']>;
  bold?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBaseFontWeightsFilterInput = {
  body?: Maybe<IntQueryOperatorInput>;
  heading?: Maybe<IntQueryOperatorInput>;
  bold?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseLineHeights = {
  body?: Maybe<Scalars['Float']>;
  heading?: Maybe<Scalars['Float']>;
};

export type SitePluginPluginOptionsPresetBaseLineHeightsFilterInput = {
  body?: Maybe<FloatQueryOperatorInput>;
  heading?: Maybe<FloatQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStyles = {
  root?: Maybe<SitePluginPluginOptionsPresetBaseStylesRoot>;
  h1?: Maybe<SitePluginPluginOptionsPresetBaseStylesH1>;
  h2?: Maybe<SitePluginPluginOptionsPresetBaseStylesH2>;
  h3?: Maybe<SitePluginPluginOptionsPresetBaseStylesH3>;
  h4?: Maybe<SitePluginPluginOptionsPresetBaseStylesH4>;
  h5?: Maybe<SitePluginPluginOptionsPresetBaseStylesH5>;
  h6?: Maybe<SitePluginPluginOptionsPresetBaseStylesH6>;
  p?: Maybe<SitePluginPluginOptionsPresetBaseStylesP>;
  a?: Maybe<SitePluginPluginOptionsPresetBaseStylesA>;
  pre?: Maybe<SitePluginPluginOptionsPresetBaseStylesPre>;
  code?: Maybe<SitePluginPluginOptionsPresetBaseStylesCode>;
  table?: Maybe<SitePluginPluginOptionsPresetBaseStylesTable>;
  th?: Maybe<SitePluginPluginOptionsPresetBaseStylesTh>;
  td?: Maybe<SitePluginPluginOptionsPresetBaseStylesTd>;
  img?: Maybe<SitePluginPluginOptionsPresetBaseStylesImg>;
};

export type SitePluginPluginOptionsPresetBaseStylesA = {
  color?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseStylesAFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesCode = {
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseStylesCodeFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesFilterInput = {
  root?: Maybe<SitePluginPluginOptionsPresetBaseStylesRootFilterInput>;
  h1?: Maybe<SitePluginPluginOptionsPresetBaseStylesH1FilterInput>;
  h2?: Maybe<SitePluginPluginOptionsPresetBaseStylesH2FilterInput>;
  h3?: Maybe<SitePluginPluginOptionsPresetBaseStylesH3FilterInput>;
  h4?: Maybe<SitePluginPluginOptionsPresetBaseStylesH4FilterInput>;
  h5?: Maybe<SitePluginPluginOptionsPresetBaseStylesH5FilterInput>;
  h6?: Maybe<SitePluginPluginOptionsPresetBaseStylesH6FilterInput>;
  p?: Maybe<SitePluginPluginOptionsPresetBaseStylesPFilterInput>;
  a?: Maybe<SitePluginPluginOptionsPresetBaseStylesAFilterInput>;
  pre?: Maybe<SitePluginPluginOptionsPresetBaseStylesPreFilterInput>;
  code?: Maybe<SitePluginPluginOptionsPresetBaseStylesCodeFilterInput>;
  table?: Maybe<SitePluginPluginOptionsPresetBaseStylesTableFilterInput>;
  th?: Maybe<SitePluginPluginOptionsPresetBaseStylesThFilterInput>;
  td?: Maybe<SitePluginPluginOptionsPresetBaseStylesTdFilterInput>;
  img?: Maybe<SitePluginPluginOptionsPresetBaseStylesImgFilterInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesH1 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBaseStylesH1FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesH2 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBaseStylesH2FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesH3 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBaseStylesH3FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesH4 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBaseStylesH4FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesH5 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBaseStylesH5FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesH6 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBaseStylesH6FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesImg = {
  maxWidth?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseStylesImgFilterInput = {
  maxWidth?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesP = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseStylesPFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesPre = {
  fontFamily?: Maybe<Scalars['String']>;
  overflowX?: Maybe<Scalars['String']>;
  code?: Maybe<SitePluginPluginOptionsPresetBaseStylesPreCode>;
};

export type SitePluginPluginOptionsPresetBaseStylesPreCode = {
  color?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseStylesPreCodeFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesPreFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  overflowX?: Maybe<StringQueryOperatorInput>;
  code?: Maybe<SitePluginPluginOptionsPresetBaseStylesPreCodeFilterInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesRoot = {
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseStylesRootFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesTable = {
  width?: Maybe<Scalars['String']>;
  borderCollapse?: Maybe<Scalars['String']>;
  borderSpacing?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBaseStylesTableFilterInput = {
  width?: Maybe<StringQueryOperatorInput>;
  borderCollapse?: Maybe<StringQueryOperatorInput>;
  borderSpacing?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesTd = {
  textAlign?: Maybe<Scalars['String']>;
  borderBottomStyle?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseStylesTdFilterInput = {
  textAlign?: Maybe<StringQueryOperatorInput>;
  borderBottomStyle?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesTh = {
  textAlign?: Maybe<Scalars['String']>;
  borderBottomStyle?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseStylesThFilterInput = {
  textAlign?: Maybe<StringQueryOperatorInput>;
  borderBottomStyle?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefault = {
  space?: Maybe<Array<Maybe<Scalars['Int']>>>;
  fonts?: Maybe<SitePluginPluginOptionsPresetDefaultFonts>;
  fontSizes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  fontWeights?: Maybe<SitePluginPluginOptionsPresetDefaultFontWeights>;
  lineHeights?: Maybe<SitePluginPluginOptionsPresetDefaultLineHeights>;
  colors?: Maybe<SitePluginPluginOptionsPresetDefaultColors>;
  styles?: Maybe<SitePluginPluginOptionsPresetDefaultStyles>;
};

export type SitePluginPluginOptionsPresetDefaultColors = {
  text?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['String']>;
  secondary?: Maybe<Scalars['String']>;
  muted?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultColorsFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<StringQueryOperatorInput>;
  secondary?: Maybe<StringQueryOperatorInput>;
  muted?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultFilterInput = {
  space?: Maybe<IntQueryOperatorInput>;
  fonts?: Maybe<SitePluginPluginOptionsPresetDefaultFontsFilterInput>;
  fontSizes?: Maybe<IntQueryOperatorInput>;
  fontWeights?: Maybe<SitePluginPluginOptionsPresetDefaultFontWeightsFilterInput>;
  lineHeights?: Maybe<SitePluginPluginOptionsPresetDefaultLineHeightsFilterInput>;
  colors?: Maybe<SitePluginPluginOptionsPresetDefaultColorsFilterInput>;
  styles?: Maybe<SitePluginPluginOptionsPresetDefaultStylesFilterInput>;
};

export type SitePluginPluginOptionsPresetDefaultFonts = {
  body?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  monospace?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultFontsFilterInput = {
  body?: Maybe<StringQueryOperatorInput>;
  heading?: Maybe<StringQueryOperatorInput>;
  monospace?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultFontWeights = {
  body?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['Int']>;
  bold?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultFontWeightsFilterInput = {
  body?: Maybe<IntQueryOperatorInput>;
  heading?: Maybe<IntQueryOperatorInput>;
  bold?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultLineHeights = {
  body?: Maybe<Scalars['Float']>;
  heading?: Maybe<Scalars['Float']>;
};

export type SitePluginPluginOptionsPresetDefaultLineHeightsFilterInput = {
  body?: Maybe<FloatQueryOperatorInput>;
  heading?: Maybe<FloatQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStyles = {
  root?: Maybe<SitePluginPluginOptionsPresetDefaultStylesRoot>;
  h1?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH1>;
  h2?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH2>;
  h3?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH3>;
  h4?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH4>;
  h5?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH5>;
  h6?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH6>;
  p?: Maybe<SitePluginPluginOptionsPresetDefaultStylesP>;
  a?: Maybe<SitePluginPluginOptionsPresetDefaultStylesA>;
  pre?: Maybe<SitePluginPluginOptionsPresetDefaultStylesPre>;
  code?: Maybe<SitePluginPluginOptionsPresetDefaultStylesCode>;
  table?: Maybe<SitePluginPluginOptionsPresetDefaultStylesTable>;
  th?: Maybe<SitePluginPluginOptionsPresetDefaultStylesTh>;
  td?: Maybe<SitePluginPluginOptionsPresetDefaultStylesTd>;
  img?: Maybe<SitePluginPluginOptionsPresetDefaultStylesImg>;
};

export type SitePluginPluginOptionsPresetDefaultStylesA = {
  color?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesAFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesCode = {
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesCodeFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesFilterInput = {
  root?: Maybe<SitePluginPluginOptionsPresetDefaultStylesRootFilterInput>;
  h1?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH1FilterInput>;
  h2?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH2FilterInput>;
  h3?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH3FilterInput>;
  h4?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH4FilterInput>;
  h5?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH5FilterInput>;
  h6?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH6FilterInput>;
  p?: Maybe<SitePluginPluginOptionsPresetDefaultStylesPFilterInput>;
  a?: Maybe<SitePluginPluginOptionsPresetDefaultStylesAFilterInput>;
  pre?: Maybe<SitePluginPluginOptionsPresetDefaultStylesPreFilterInput>;
  code?: Maybe<SitePluginPluginOptionsPresetDefaultStylesCodeFilterInput>;
  table?: Maybe<SitePluginPluginOptionsPresetDefaultStylesTableFilterInput>;
  th?: Maybe<SitePluginPluginOptionsPresetDefaultStylesThFilterInput>;
  td?: Maybe<SitePluginPluginOptionsPresetDefaultStylesTdFilterInput>;
  img?: Maybe<SitePluginPluginOptionsPresetDefaultStylesImgFilterInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH1 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH1FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH2 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH2FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH3 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH3FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH4 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH4FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH5 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH5FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH6 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH6FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesImg = {
  maxWidth?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesImgFilterInput = {
  maxWidth?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesP = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesPFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesPre = {
  fontFamily?: Maybe<Scalars['String']>;
  overflowX?: Maybe<Scalars['String']>;
  code?: Maybe<SitePluginPluginOptionsPresetDefaultStylesPreCode>;
};

export type SitePluginPluginOptionsPresetDefaultStylesPreCode = {
  color?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesPreCodeFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesPreFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  overflowX?: Maybe<StringQueryOperatorInput>;
  code?: Maybe<SitePluginPluginOptionsPresetDefaultStylesPreCodeFilterInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesRoot = {
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesRootFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTable = {
  width?: Maybe<Scalars['String']>;
  borderCollapse?: Maybe<Scalars['String']>;
  borderSpacing?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTableFilterInput = {
  width?: Maybe<StringQueryOperatorInput>;
  borderCollapse?: Maybe<StringQueryOperatorInput>;
  borderSpacing?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTd = {
  textAlign?: Maybe<Scalars['String']>;
  borderBottomStyle?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTdFilterInput = {
  textAlign?: Maybe<StringQueryOperatorInput>;
  borderBottomStyle?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTh = {
  textAlign?: Maybe<Scalars['String']>;
  borderBottomStyle?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesThFilterInput = {
  textAlign?: Maybe<StringQueryOperatorInput>;
  borderBottomStyle?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFilterInput = {
  base?: Maybe<SitePluginPluginOptionsPresetBaseFilterInput>;
  default?: Maybe<SitePluginPluginOptionsPresetDefaultFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type ThemeUiConfig = Node & {
  preset?: Maybe<Scalars['JSON']>;
  prismPreset?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ThemeUiConfigConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ThemeUiConfigEdge>;
  nodes: Array<ThemeUiConfig>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ThemeUiConfigGroupConnection>;
};


export type ThemeUiConfigConnectionDistinctArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ThemeUiConfigFieldsEnum;
};

export type ThemeUiConfigEdge = {
  next?: Maybe<ThemeUiConfig>;
  node: ThemeUiConfig;
  previous?: Maybe<ThemeUiConfig>;
};

export type ThemeUiConfigFieldsEnum =
  | 'preset'
  | 'prismPreset'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ThemeUiConfigFilterInput = {
  preset?: Maybe<JsonQueryOperatorInput>;
  prismPreset?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ThemeUiConfigGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ThemeUiConfigEdge>;
  nodes: Array<ThemeUiConfig>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ThemeUiConfigSortInput = {
  fields?: Maybe<Array<Maybe<ThemeUiConfigFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Unnamed_1_QueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type Unnamed_1_Query = { locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> } };

export type Unnamed_2_QueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type Unnamed_2_Query = { locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> } };

export type Unnamed_3_QueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type Unnamed_3_Query = { locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> } };

export type Unnamed_4_QueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type Unnamed_4_Query = { locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> } };

export type Unnamed_5_QueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type Unnamed_5_Query = { locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> } };

export type Unnamed_6_QueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type Unnamed_6_Query = { locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> } };

export type Unnamed_7_QueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type Unnamed_7_Query = { locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> }, mdxs: { edges: Array<{ node: { frontmatter?: Maybe<Pick<MdxFrontmatter, 'descriptionArray' | 'image' | 'title'>> } }> } };

export type Unnamed_8_QueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type Unnamed_8_Query = { locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> }, mdxs: { edges: Array<{ node: { frontmatter?: Maybe<Pick<MdxFrontmatter, 'name' | 'position' | 'email' | 'phoneNumber' | 'photo'>> } }> } };

export type Unnamed_9_QueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type Unnamed_9_Query = { locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> }, mdxs: { edges: Array<{ node: { frontmatter?: Maybe<(
          Pick<MdxFrontmatter, 'type'>
          & { homePage?: Maybe<(
            Pick<MdxFrontmatterHomePage, 'title' | 'linkTo' | 'linkText' | 'image' | 'hoverImage' | 'description'>
            & { imageStyle?: Maybe<Pick<MdxFrontmatterHomePageImageStyle, 'ml'>> }
          )> }
        )> } }> } };

export type Unnamed_10_QueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type Unnamed_10_Query = { locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> }, mdxs: { edges: Array<{ node: { frontmatter?: Maybe<{ servicesPage?: Maybe<(
            Pick<MdxFrontmatterServicesPage, 'name' | 'title' | 'description' | 'photo' | 'icon' | 'initials' | 'position'>
            & { url?: Maybe<Pick<MdxFrontmatterServicesPageUrl, 'navigationLink' | 'linkText'>> }
          )> }> } }> } };

export type Unnamed_11_QueryVariables = Exact<{
  language?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
}>;


export type Unnamed_11_Query = { locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> }, allMdx: { edges: Array<{ node: (
        Pick<Mdx, 'id' | 'body'>
        & { frontmatter?: Maybe<Pick<MdxFrontmatter, 'image' | 'title' | 'slug'>> }
      ) }> } };
