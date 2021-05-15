export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
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
  __typename?: 'Directory';
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
  __typename?: 'DirectoryConnection';
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
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

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
  __typename?: 'DirectoryGroupConnection';
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

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
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
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  /** Returns all children nodes filtered by type employee */
  childrenEmployee?: Maybe<Array<Maybe<Employee>>>;
  /** Returns the first child node of type employee or null if there are no children of given type on this node */
  childEmployee?: Maybe<Employee>;
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
  __typename?: 'FileConnection';
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
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildrenMdx = 'childrenMdx',
  ChildrenMdxRawBody = 'childrenMdx___rawBody',
  ChildrenMdxFileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  ChildrenMdxFrontmatterTitle = 'childrenMdx___frontmatter___title',
  ChildrenMdxFrontmatterLanguage = 'childrenMdx___frontmatter___language',
  ChildrenMdxFrontmatterId = 'childrenMdx___frontmatter___id',
  ChildrenMdxFrontmatterType = 'childrenMdx___frontmatter___type',
  ChildrenMdxFrontmatterSlug = 'childrenMdx___frontmatter___slug',
  ChildrenMdxFrontmatterImageSourceInstanceName = 'childrenMdx___frontmatter___image___sourceInstanceName',
  ChildrenMdxFrontmatterImageAbsolutePath = 'childrenMdx___frontmatter___image___absolutePath',
  ChildrenMdxFrontmatterImageRelativePath = 'childrenMdx___frontmatter___image___relativePath',
  ChildrenMdxFrontmatterImageExtension = 'childrenMdx___frontmatter___image___extension',
  ChildrenMdxFrontmatterImageSize = 'childrenMdx___frontmatter___image___size',
  ChildrenMdxFrontmatterImagePrettySize = 'childrenMdx___frontmatter___image___prettySize',
  ChildrenMdxFrontmatterImageModifiedTime = 'childrenMdx___frontmatter___image___modifiedTime',
  ChildrenMdxFrontmatterImageAccessTime = 'childrenMdx___frontmatter___image___accessTime',
  ChildrenMdxFrontmatterImageChangeTime = 'childrenMdx___frontmatter___image___changeTime',
  ChildrenMdxFrontmatterImageBirthTime = 'childrenMdx___frontmatter___image___birthTime',
  ChildrenMdxFrontmatterImageRoot = 'childrenMdx___frontmatter___image___root',
  ChildrenMdxFrontmatterImageDir = 'childrenMdx___frontmatter___image___dir',
  ChildrenMdxFrontmatterImageBase = 'childrenMdx___frontmatter___image___base',
  ChildrenMdxFrontmatterImageExt = 'childrenMdx___frontmatter___image___ext',
  ChildrenMdxFrontmatterImageName = 'childrenMdx___frontmatter___image___name',
  ChildrenMdxFrontmatterImageRelativeDirectory = 'childrenMdx___frontmatter___image___relativeDirectory',
  ChildrenMdxFrontmatterImageDev = 'childrenMdx___frontmatter___image___dev',
  ChildrenMdxFrontmatterImageMode = 'childrenMdx___frontmatter___image___mode',
  ChildrenMdxFrontmatterImageNlink = 'childrenMdx___frontmatter___image___nlink',
  ChildrenMdxFrontmatterImageUid = 'childrenMdx___frontmatter___image___uid',
  ChildrenMdxFrontmatterImageGid = 'childrenMdx___frontmatter___image___gid',
  ChildrenMdxFrontmatterImageRdev = 'childrenMdx___frontmatter___image___rdev',
  ChildrenMdxFrontmatterImageIno = 'childrenMdx___frontmatter___image___ino',
  ChildrenMdxFrontmatterImageAtimeMs = 'childrenMdx___frontmatter___image___atimeMs',
  ChildrenMdxFrontmatterImageMtimeMs = 'childrenMdx___frontmatter___image___mtimeMs',
  ChildrenMdxFrontmatterImageCtimeMs = 'childrenMdx___frontmatter___image___ctimeMs',
  ChildrenMdxFrontmatterImageAtime = 'childrenMdx___frontmatter___image___atime',
  ChildrenMdxFrontmatterImageMtime = 'childrenMdx___frontmatter___image___mtime',
  ChildrenMdxFrontmatterImageCtime = 'childrenMdx___frontmatter___image___ctime',
  ChildrenMdxFrontmatterImageBirthtime = 'childrenMdx___frontmatter___image___birthtime',
  ChildrenMdxFrontmatterImageBirthtimeMs = 'childrenMdx___frontmatter___image___birthtimeMs',
  ChildrenMdxFrontmatterImageBlksize = 'childrenMdx___frontmatter___image___blksize',
  ChildrenMdxFrontmatterImageBlocks = 'childrenMdx___frontmatter___image___blocks',
  ChildrenMdxFrontmatterImagePublicUrl = 'childrenMdx___frontmatter___image___publicURL',
  ChildrenMdxFrontmatterImageChildrenImageSharp = 'childrenMdx___frontmatter___image___childrenImageSharp',
  ChildrenMdxFrontmatterImageChildrenMdx = 'childrenMdx___frontmatter___image___childrenMdx',
  ChildrenMdxFrontmatterImageChildrenEmployee = 'childrenMdx___frontmatter___image___childrenEmployee',
  ChildrenMdxFrontmatterImageId = 'childrenMdx___frontmatter___image___id',
  ChildrenMdxFrontmatterImageChildren = 'childrenMdx___frontmatter___image___children',
  ChildrenMdxSlug = 'childrenMdx___slug',
  ChildrenMdxBody = 'childrenMdx___body',
  ChildrenMdxExcerpt = 'childrenMdx___excerpt',
  ChildrenMdxHeadings = 'childrenMdx___headings',
  ChildrenMdxHeadingsValue = 'childrenMdx___headings___value',
  ChildrenMdxHeadingsDepth = 'childrenMdx___headings___depth',
  ChildrenMdxHtml = 'childrenMdx___html',
  ChildrenMdxMdxAst = 'childrenMdx___mdxAST',
  ChildrenMdxTableOfContents = 'childrenMdx___tableOfContents',
  ChildrenMdxTimeToRead = 'childrenMdx___timeToRead',
  ChildrenMdxWordCountParagraphs = 'childrenMdx___wordCount___paragraphs',
  ChildrenMdxWordCountSentences = 'childrenMdx___wordCount___sentences',
  ChildrenMdxWordCountWords = 'childrenMdx___wordCount___words',
  ChildrenMdxId = 'childrenMdx___id',
  ChildrenMdxParentId = 'childrenMdx___parent___id',
  ChildrenMdxParentParentId = 'childrenMdx___parent___parent___id',
  ChildrenMdxParentParentChildren = 'childrenMdx___parent___parent___children',
  ChildrenMdxParentChildren = 'childrenMdx___parent___children',
  ChildrenMdxParentChildrenId = 'childrenMdx___parent___children___id',
  ChildrenMdxParentChildrenChildren = 'childrenMdx___parent___children___children',
  ChildrenMdxParentInternalContent = 'childrenMdx___parent___internal___content',
  ChildrenMdxParentInternalContentDigest = 'childrenMdx___parent___internal___contentDigest',
  ChildrenMdxParentInternalDescription = 'childrenMdx___parent___internal___description',
  ChildrenMdxParentInternalFieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  ChildrenMdxParentInternalIgnoreType = 'childrenMdx___parent___internal___ignoreType',
  ChildrenMdxParentInternalMediaType = 'childrenMdx___parent___internal___mediaType',
  ChildrenMdxParentInternalOwner = 'childrenMdx___parent___internal___owner',
  ChildrenMdxParentInternalType = 'childrenMdx___parent___internal___type',
  ChildrenMdxChildren = 'childrenMdx___children',
  ChildrenMdxChildrenId = 'childrenMdx___children___id',
  ChildrenMdxChildrenParentId = 'childrenMdx___children___parent___id',
  ChildrenMdxChildrenParentChildren = 'childrenMdx___children___parent___children',
  ChildrenMdxChildrenChildren = 'childrenMdx___children___children',
  ChildrenMdxChildrenChildrenId = 'childrenMdx___children___children___id',
  ChildrenMdxChildrenChildrenChildren = 'childrenMdx___children___children___children',
  ChildrenMdxChildrenInternalContent = 'childrenMdx___children___internal___content',
  ChildrenMdxChildrenInternalContentDigest = 'childrenMdx___children___internal___contentDigest',
  ChildrenMdxChildrenInternalDescription = 'childrenMdx___children___internal___description',
  ChildrenMdxChildrenInternalFieldOwners = 'childrenMdx___children___internal___fieldOwners',
  ChildrenMdxChildrenInternalIgnoreType = 'childrenMdx___children___internal___ignoreType',
  ChildrenMdxChildrenInternalMediaType = 'childrenMdx___children___internal___mediaType',
  ChildrenMdxChildrenInternalOwner = 'childrenMdx___children___internal___owner',
  ChildrenMdxChildrenInternalType = 'childrenMdx___children___internal___type',
  ChildrenMdxInternalContent = 'childrenMdx___internal___content',
  ChildrenMdxInternalContentDigest = 'childrenMdx___internal___contentDigest',
  ChildrenMdxInternalDescription = 'childrenMdx___internal___description',
  ChildrenMdxInternalFieldOwners = 'childrenMdx___internal___fieldOwners',
  ChildrenMdxInternalIgnoreType = 'childrenMdx___internal___ignoreType',
  ChildrenMdxInternalMediaType = 'childrenMdx___internal___mediaType',
  ChildrenMdxInternalOwner = 'childrenMdx___internal___owner',
  ChildrenMdxInternalType = 'childrenMdx___internal___type',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxFrontmatterLanguage = 'childMdx___frontmatter___language',
  ChildMdxFrontmatterId = 'childMdx___frontmatter___id',
  ChildMdxFrontmatterType = 'childMdx___frontmatter___type',
  ChildMdxFrontmatterSlug = 'childMdx___frontmatter___slug',
  ChildMdxFrontmatterImageSourceInstanceName = 'childMdx___frontmatter___image___sourceInstanceName',
  ChildMdxFrontmatterImageAbsolutePath = 'childMdx___frontmatter___image___absolutePath',
  ChildMdxFrontmatterImageRelativePath = 'childMdx___frontmatter___image___relativePath',
  ChildMdxFrontmatterImageExtension = 'childMdx___frontmatter___image___extension',
  ChildMdxFrontmatterImageSize = 'childMdx___frontmatter___image___size',
  ChildMdxFrontmatterImagePrettySize = 'childMdx___frontmatter___image___prettySize',
  ChildMdxFrontmatterImageModifiedTime = 'childMdx___frontmatter___image___modifiedTime',
  ChildMdxFrontmatterImageAccessTime = 'childMdx___frontmatter___image___accessTime',
  ChildMdxFrontmatterImageChangeTime = 'childMdx___frontmatter___image___changeTime',
  ChildMdxFrontmatterImageBirthTime = 'childMdx___frontmatter___image___birthTime',
  ChildMdxFrontmatterImageRoot = 'childMdx___frontmatter___image___root',
  ChildMdxFrontmatterImageDir = 'childMdx___frontmatter___image___dir',
  ChildMdxFrontmatterImageBase = 'childMdx___frontmatter___image___base',
  ChildMdxFrontmatterImageExt = 'childMdx___frontmatter___image___ext',
  ChildMdxFrontmatterImageName = 'childMdx___frontmatter___image___name',
  ChildMdxFrontmatterImageRelativeDirectory = 'childMdx___frontmatter___image___relativeDirectory',
  ChildMdxFrontmatterImageDev = 'childMdx___frontmatter___image___dev',
  ChildMdxFrontmatterImageMode = 'childMdx___frontmatter___image___mode',
  ChildMdxFrontmatterImageNlink = 'childMdx___frontmatter___image___nlink',
  ChildMdxFrontmatterImageUid = 'childMdx___frontmatter___image___uid',
  ChildMdxFrontmatterImageGid = 'childMdx___frontmatter___image___gid',
  ChildMdxFrontmatterImageRdev = 'childMdx___frontmatter___image___rdev',
  ChildMdxFrontmatterImageIno = 'childMdx___frontmatter___image___ino',
  ChildMdxFrontmatterImageAtimeMs = 'childMdx___frontmatter___image___atimeMs',
  ChildMdxFrontmatterImageMtimeMs = 'childMdx___frontmatter___image___mtimeMs',
  ChildMdxFrontmatterImageCtimeMs = 'childMdx___frontmatter___image___ctimeMs',
  ChildMdxFrontmatterImageAtime = 'childMdx___frontmatter___image___atime',
  ChildMdxFrontmatterImageMtime = 'childMdx___frontmatter___image___mtime',
  ChildMdxFrontmatterImageCtime = 'childMdx___frontmatter___image___ctime',
  ChildMdxFrontmatterImageBirthtime = 'childMdx___frontmatter___image___birthtime',
  ChildMdxFrontmatterImageBirthtimeMs = 'childMdx___frontmatter___image___birthtimeMs',
  ChildMdxFrontmatterImageBlksize = 'childMdx___frontmatter___image___blksize',
  ChildMdxFrontmatterImageBlocks = 'childMdx___frontmatter___image___blocks',
  ChildMdxFrontmatterImagePublicUrl = 'childMdx___frontmatter___image___publicURL',
  ChildMdxFrontmatterImageChildrenImageSharp = 'childMdx___frontmatter___image___childrenImageSharp',
  ChildMdxFrontmatterImageChildrenMdx = 'childMdx___frontmatter___image___childrenMdx',
  ChildMdxFrontmatterImageChildrenEmployee = 'childMdx___frontmatter___image___childrenEmployee',
  ChildMdxFrontmatterImageId = 'childMdx___frontmatter___image___id',
  ChildMdxFrontmatterImageChildren = 'childMdx___frontmatter___image___children',
  ChildMdxSlug = 'childMdx___slug',
  ChildMdxBody = 'childMdx___body',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type',
  ChildrenEmployee = 'childrenEmployee',
  ChildrenEmployeeId = 'childrenEmployee___id',
  ChildrenEmployeeParentId = 'childrenEmployee___parent___id',
  ChildrenEmployeeParentParentId = 'childrenEmployee___parent___parent___id',
  ChildrenEmployeeParentParentChildren = 'childrenEmployee___parent___parent___children',
  ChildrenEmployeeParentChildren = 'childrenEmployee___parent___children',
  ChildrenEmployeeParentChildrenId = 'childrenEmployee___parent___children___id',
  ChildrenEmployeeParentChildrenChildren = 'childrenEmployee___parent___children___children',
  ChildrenEmployeeParentInternalContent = 'childrenEmployee___parent___internal___content',
  ChildrenEmployeeParentInternalContentDigest = 'childrenEmployee___parent___internal___contentDigest',
  ChildrenEmployeeParentInternalDescription = 'childrenEmployee___parent___internal___description',
  ChildrenEmployeeParentInternalFieldOwners = 'childrenEmployee___parent___internal___fieldOwners',
  ChildrenEmployeeParentInternalIgnoreType = 'childrenEmployee___parent___internal___ignoreType',
  ChildrenEmployeeParentInternalMediaType = 'childrenEmployee___parent___internal___mediaType',
  ChildrenEmployeeParentInternalOwner = 'childrenEmployee___parent___internal___owner',
  ChildrenEmployeeParentInternalType = 'childrenEmployee___parent___internal___type',
  ChildrenEmployeeChildren = 'childrenEmployee___children',
  ChildrenEmployeeChildrenId = 'childrenEmployee___children___id',
  ChildrenEmployeeChildrenParentId = 'childrenEmployee___children___parent___id',
  ChildrenEmployeeChildrenParentChildren = 'childrenEmployee___children___parent___children',
  ChildrenEmployeeChildrenChildren = 'childrenEmployee___children___children',
  ChildrenEmployeeChildrenChildrenId = 'childrenEmployee___children___children___id',
  ChildrenEmployeeChildrenChildrenChildren = 'childrenEmployee___children___children___children',
  ChildrenEmployeeChildrenInternalContent = 'childrenEmployee___children___internal___content',
  ChildrenEmployeeChildrenInternalContentDigest = 'childrenEmployee___children___internal___contentDigest',
  ChildrenEmployeeChildrenInternalDescription = 'childrenEmployee___children___internal___description',
  ChildrenEmployeeChildrenInternalFieldOwners = 'childrenEmployee___children___internal___fieldOwners',
  ChildrenEmployeeChildrenInternalIgnoreType = 'childrenEmployee___children___internal___ignoreType',
  ChildrenEmployeeChildrenInternalMediaType = 'childrenEmployee___children___internal___mediaType',
  ChildrenEmployeeChildrenInternalOwner = 'childrenEmployee___children___internal___owner',
  ChildrenEmployeeChildrenInternalType = 'childrenEmployee___children___internal___type',
  ChildrenEmployeeInternalContent = 'childrenEmployee___internal___content',
  ChildrenEmployeeInternalContentDigest = 'childrenEmployee___internal___contentDigest',
  ChildrenEmployeeInternalDescription = 'childrenEmployee___internal___description',
  ChildrenEmployeeInternalFieldOwners = 'childrenEmployee___internal___fieldOwners',
  ChildrenEmployeeInternalIgnoreType = 'childrenEmployee___internal___ignoreType',
  ChildrenEmployeeInternalMediaType = 'childrenEmployee___internal___mediaType',
  ChildrenEmployeeInternalOwner = 'childrenEmployee___internal___owner',
  ChildrenEmployeeInternalType = 'childrenEmployee___internal___type',
  ChildrenEmployeeType = 'childrenEmployee___type',
  ChildrenEmployeeName = 'childrenEmployee___name',
  ChildrenEmployeePositionEn = 'childrenEmployee___position___en',
  ChildrenEmployeePositionNb = 'childrenEmployee___position___nb',
  ChildrenEmployeeEmail = 'childrenEmployee___email',
  ChildrenEmployeePhoneNumber = 'childrenEmployee___phoneNumber',
  ChildrenEmployeePhotoSourceInstanceName = 'childrenEmployee___photo___sourceInstanceName',
  ChildrenEmployeePhotoAbsolutePath = 'childrenEmployee___photo___absolutePath',
  ChildrenEmployeePhotoRelativePath = 'childrenEmployee___photo___relativePath',
  ChildrenEmployeePhotoExtension = 'childrenEmployee___photo___extension',
  ChildrenEmployeePhotoSize = 'childrenEmployee___photo___size',
  ChildrenEmployeePhotoPrettySize = 'childrenEmployee___photo___prettySize',
  ChildrenEmployeePhotoModifiedTime = 'childrenEmployee___photo___modifiedTime',
  ChildrenEmployeePhotoAccessTime = 'childrenEmployee___photo___accessTime',
  ChildrenEmployeePhotoChangeTime = 'childrenEmployee___photo___changeTime',
  ChildrenEmployeePhotoBirthTime = 'childrenEmployee___photo___birthTime',
  ChildrenEmployeePhotoRoot = 'childrenEmployee___photo___root',
  ChildrenEmployeePhotoDir = 'childrenEmployee___photo___dir',
  ChildrenEmployeePhotoBase = 'childrenEmployee___photo___base',
  ChildrenEmployeePhotoExt = 'childrenEmployee___photo___ext',
  ChildrenEmployeePhotoName = 'childrenEmployee___photo___name',
  ChildrenEmployeePhotoRelativeDirectory = 'childrenEmployee___photo___relativeDirectory',
  ChildrenEmployeePhotoDev = 'childrenEmployee___photo___dev',
  ChildrenEmployeePhotoMode = 'childrenEmployee___photo___mode',
  ChildrenEmployeePhotoNlink = 'childrenEmployee___photo___nlink',
  ChildrenEmployeePhotoUid = 'childrenEmployee___photo___uid',
  ChildrenEmployeePhotoGid = 'childrenEmployee___photo___gid',
  ChildrenEmployeePhotoRdev = 'childrenEmployee___photo___rdev',
  ChildrenEmployeePhotoIno = 'childrenEmployee___photo___ino',
  ChildrenEmployeePhotoAtimeMs = 'childrenEmployee___photo___atimeMs',
  ChildrenEmployeePhotoMtimeMs = 'childrenEmployee___photo___mtimeMs',
  ChildrenEmployeePhotoCtimeMs = 'childrenEmployee___photo___ctimeMs',
  ChildrenEmployeePhotoAtime = 'childrenEmployee___photo___atime',
  ChildrenEmployeePhotoMtime = 'childrenEmployee___photo___mtime',
  ChildrenEmployeePhotoCtime = 'childrenEmployee___photo___ctime',
  ChildrenEmployeePhotoBirthtime = 'childrenEmployee___photo___birthtime',
  ChildrenEmployeePhotoBirthtimeMs = 'childrenEmployee___photo___birthtimeMs',
  ChildrenEmployeePhotoBlksize = 'childrenEmployee___photo___blksize',
  ChildrenEmployeePhotoBlocks = 'childrenEmployee___photo___blocks',
  ChildrenEmployeePhotoPublicUrl = 'childrenEmployee___photo___publicURL',
  ChildrenEmployeePhotoChildrenImageSharp = 'childrenEmployee___photo___childrenImageSharp',
  ChildrenEmployeePhotoChildrenImageSharpGatsbyImageData = 'childrenEmployee___photo___childrenImageSharp___gatsbyImageData',
  ChildrenEmployeePhotoChildrenImageSharpId = 'childrenEmployee___photo___childrenImageSharp___id',
  ChildrenEmployeePhotoChildrenImageSharpChildren = 'childrenEmployee___photo___childrenImageSharp___children',
  ChildrenEmployeePhotoChildImageSharpGatsbyImageData = 'childrenEmployee___photo___childImageSharp___gatsbyImageData',
  ChildrenEmployeePhotoChildImageSharpId = 'childrenEmployee___photo___childImageSharp___id',
  ChildrenEmployeePhotoChildImageSharpChildren = 'childrenEmployee___photo___childImageSharp___children',
  ChildrenEmployeePhotoChildrenMdx = 'childrenEmployee___photo___childrenMdx',
  ChildrenEmployeePhotoChildrenMdxRawBody = 'childrenEmployee___photo___childrenMdx___rawBody',
  ChildrenEmployeePhotoChildrenMdxFileAbsolutePath = 'childrenEmployee___photo___childrenMdx___fileAbsolutePath',
  ChildrenEmployeePhotoChildrenMdxSlug = 'childrenEmployee___photo___childrenMdx___slug',
  ChildrenEmployeePhotoChildrenMdxBody = 'childrenEmployee___photo___childrenMdx___body',
  ChildrenEmployeePhotoChildrenMdxExcerpt = 'childrenEmployee___photo___childrenMdx___excerpt',
  ChildrenEmployeePhotoChildrenMdxHeadings = 'childrenEmployee___photo___childrenMdx___headings',
  ChildrenEmployeePhotoChildrenMdxHtml = 'childrenEmployee___photo___childrenMdx___html',
  ChildrenEmployeePhotoChildrenMdxMdxAst = 'childrenEmployee___photo___childrenMdx___mdxAST',
  ChildrenEmployeePhotoChildrenMdxTableOfContents = 'childrenEmployee___photo___childrenMdx___tableOfContents',
  ChildrenEmployeePhotoChildrenMdxTimeToRead = 'childrenEmployee___photo___childrenMdx___timeToRead',
  ChildrenEmployeePhotoChildrenMdxId = 'childrenEmployee___photo___childrenMdx___id',
  ChildrenEmployeePhotoChildrenMdxChildren = 'childrenEmployee___photo___childrenMdx___children',
  ChildrenEmployeePhotoChildMdxRawBody = 'childrenEmployee___photo___childMdx___rawBody',
  ChildrenEmployeePhotoChildMdxFileAbsolutePath = 'childrenEmployee___photo___childMdx___fileAbsolutePath',
  ChildrenEmployeePhotoChildMdxSlug = 'childrenEmployee___photo___childMdx___slug',
  ChildrenEmployeePhotoChildMdxBody = 'childrenEmployee___photo___childMdx___body',
  ChildrenEmployeePhotoChildMdxExcerpt = 'childrenEmployee___photo___childMdx___excerpt',
  ChildrenEmployeePhotoChildMdxHeadings = 'childrenEmployee___photo___childMdx___headings',
  ChildrenEmployeePhotoChildMdxHtml = 'childrenEmployee___photo___childMdx___html',
  ChildrenEmployeePhotoChildMdxMdxAst = 'childrenEmployee___photo___childMdx___mdxAST',
  ChildrenEmployeePhotoChildMdxTableOfContents = 'childrenEmployee___photo___childMdx___tableOfContents',
  ChildrenEmployeePhotoChildMdxTimeToRead = 'childrenEmployee___photo___childMdx___timeToRead',
  ChildrenEmployeePhotoChildMdxId = 'childrenEmployee___photo___childMdx___id',
  ChildrenEmployeePhotoChildMdxChildren = 'childrenEmployee___photo___childMdx___children',
  ChildrenEmployeePhotoChildrenEmployee = 'childrenEmployee___photo___childrenEmployee',
  ChildrenEmployeePhotoChildrenEmployeeId = 'childrenEmployee___photo___childrenEmployee___id',
  ChildrenEmployeePhotoChildrenEmployeeChildren = 'childrenEmployee___photo___childrenEmployee___children',
  ChildrenEmployeePhotoChildrenEmployeeType = 'childrenEmployee___photo___childrenEmployee___type',
  ChildrenEmployeePhotoChildrenEmployeeName = 'childrenEmployee___photo___childrenEmployee___name',
  ChildrenEmployeePhotoChildrenEmployeeEmail = 'childrenEmployee___photo___childrenEmployee___email',
  ChildrenEmployeePhotoChildrenEmployeePhoneNumber = 'childrenEmployee___photo___childrenEmployee___phoneNumber',
  ChildrenEmployeePhotoChildEmployeeId = 'childrenEmployee___photo___childEmployee___id',
  ChildrenEmployeePhotoChildEmployeeChildren = 'childrenEmployee___photo___childEmployee___children',
  ChildrenEmployeePhotoChildEmployeeType = 'childrenEmployee___photo___childEmployee___type',
  ChildrenEmployeePhotoChildEmployeeName = 'childrenEmployee___photo___childEmployee___name',
  ChildrenEmployeePhotoChildEmployeeEmail = 'childrenEmployee___photo___childEmployee___email',
  ChildrenEmployeePhotoChildEmployeePhoneNumber = 'childrenEmployee___photo___childEmployee___phoneNumber',
  ChildrenEmployeePhotoId = 'childrenEmployee___photo___id',
  ChildrenEmployeePhotoParentId = 'childrenEmployee___photo___parent___id',
  ChildrenEmployeePhotoParentChildren = 'childrenEmployee___photo___parent___children',
  ChildrenEmployeePhotoChildren = 'childrenEmployee___photo___children',
  ChildrenEmployeePhotoChildrenId = 'childrenEmployee___photo___children___id',
  ChildrenEmployeePhotoChildrenChildren = 'childrenEmployee___photo___children___children',
  ChildrenEmployeePhotoInternalContent = 'childrenEmployee___photo___internal___content',
  ChildrenEmployeePhotoInternalContentDigest = 'childrenEmployee___photo___internal___contentDigest',
  ChildrenEmployeePhotoInternalDescription = 'childrenEmployee___photo___internal___description',
  ChildrenEmployeePhotoInternalFieldOwners = 'childrenEmployee___photo___internal___fieldOwners',
  ChildrenEmployeePhotoInternalIgnoreType = 'childrenEmployee___photo___internal___ignoreType',
  ChildrenEmployeePhotoInternalMediaType = 'childrenEmployee___photo___internal___mediaType',
  ChildrenEmployeePhotoInternalOwner = 'childrenEmployee___photo___internal___owner',
  ChildrenEmployeePhotoInternalType = 'childrenEmployee___photo___internal___type',
  ChildEmployeeId = 'childEmployee___id',
  ChildEmployeeParentId = 'childEmployee___parent___id',
  ChildEmployeeParentParentId = 'childEmployee___parent___parent___id',
  ChildEmployeeParentParentChildren = 'childEmployee___parent___parent___children',
  ChildEmployeeParentChildren = 'childEmployee___parent___children',
  ChildEmployeeParentChildrenId = 'childEmployee___parent___children___id',
  ChildEmployeeParentChildrenChildren = 'childEmployee___parent___children___children',
  ChildEmployeeParentInternalContent = 'childEmployee___parent___internal___content',
  ChildEmployeeParentInternalContentDigest = 'childEmployee___parent___internal___contentDigest',
  ChildEmployeeParentInternalDescription = 'childEmployee___parent___internal___description',
  ChildEmployeeParentInternalFieldOwners = 'childEmployee___parent___internal___fieldOwners',
  ChildEmployeeParentInternalIgnoreType = 'childEmployee___parent___internal___ignoreType',
  ChildEmployeeParentInternalMediaType = 'childEmployee___parent___internal___mediaType',
  ChildEmployeeParentInternalOwner = 'childEmployee___parent___internal___owner',
  ChildEmployeeParentInternalType = 'childEmployee___parent___internal___type',
  ChildEmployeeChildren = 'childEmployee___children',
  ChildEmployeeChildrenId = 'childEmployee___children___id',
  ChildEmployeeChildrenParentId = 'childEmployee___children___parent___id',
  ChildEmployeeChildrenParentChildren = 'childEmployee___children___parent___children',
  ChildEmployeeChildrenChildren = 'childEmployee___children___children',
  ChildEmployeeChildrenChildrenId = 'childEmployee___children___children___id',
  ChildEmployeeChildrenChildrenChildren = 'childEmployee___children___children___children',
  ChildEmployeeChildrenInternalContent = 'childEmployee___children___internal___content',
  ChildEmployeeChildrenInternalContentDigest = 'childEmployee___children___internal___contentDigest',
  ChildEmployeeChildrenInternalDescription = 'childEmployee___children___internal___description',
  ChildEmployeeChildrenInternalFieldOwners = 'childEmployee___children___internal___fieldOwners',
  ChildEmployeeChildrenInternalIgnoreType = 'childEmployee___children___internal___ignoreType',
  ChildEmployeeChildrenInternalMediaType = 'childEmployee___children___internal___mediaType',
  ChildEmployeeChildrenInternalOwner = 'childEmployee___children___internal___owner',
  ChildEmployeeChildrenInternalType = 'childEmployee___children___internal___type',
  ChildEmployeeInternalContent = 'childEmployee___internal___content',
  ChildEmployeeInternalContentDigest = 'childEmployee___internal___contentDigest',
  ChildEmployeeInternalDescription = 'childEmployee___internal___description',
  ChildEmployeeInternalFieldOwners = 'childEmployee___internal___fieldOwners',
  ChildEmployeeInternalIgnoreType = 'childEmployee___internal___ignoreType',
  ChildEmployeeInternalMediaType = 'childEmployee___internal___mediaType',
  ChildEmployeeInternalOwner = 'childEmployee___internal___owner',
  ChildEmployeeInternalType = 'childEmployee___internal___type',
  ChildEmployeeType = 'childEmployee___type',
  ChildEmployeeName = 'childEmployee___name',
  ChildEmployeePositionEn = 'childEmployee___position___en',
  ChildEmployeePositionNb = 'childEmployee___position___nb',
  ChildEmployeeEmail = 'childEmployee___email',
  ChildEmployeePhoneNumber = 'childEmployee___phoneNumber',
  ChildEmployeePhotoSourceInstanceName = 'childEmployee___photo___sourceInstanceName',
  ChildEmployeePhotoAbsolutePath = 'childEmployee___photo___absolutePath',
  ChildEmployeePhotoRelativePath = 'childEmployee___photo___relativePath',
  ChildEmployeePhotoExtension = 'childEmployee___photo___extension',
  ChildEmployeePhotoSize = 'childEmployee___photo___size',
  ChildEmployeePhotoPrettySize = 'childEmployee___photo___prettySize',
  ChildEmployeePhotoModifiedTime = 'childEmployee___photo___modifiedTime',
  ChildEmployeePhotoAccessTime = 'childEmployee___photo___accessTime',
  ChildEmployeePhotoChangeTime = 'childEmployee___photo___changeTime',
  ChildEmployeePhotoBirthTime = 'childEmployee___photo___birthTime',
  ChildEmployeePhotoRoot = 'childEmployee___photo___root',
  ChildEmployeePhotoDir = 'childEmployee___photo___dir',
  ChildEmployeePhotoBase = 'childEmployee___photo___base',
  ChildEmployeePhotoExt = 'childEmployee___photo___ext',
  ChildEmployeePhotoName = 'childEmployee___photo___name',
  ChildEmployeePhotoRelativeDirectory = 'childEmployee___photo___relativeDirectory',
  ChildEmployeePhotoDev = 'childEmployee___photo___dev',
  ChildEmployeePhotoMode = 'childEmployee___photo___mode',
  ChildEmployeePhotoNlink = 'childEmployee___photo___nlink',
  ChildEmployeePhotoUid = 'childEmployee___photo___uid',
  ChildEmployeePhotoGid = 'childEmployee___photo___gid',
  ChildEmployeePhotoRdev = 'childEmployee___photo___rdev',
  ChildEmployeePhotoIno = 'childEmployee___photo___ino',
  ChildEmployeePhotoAtimeMs = 'childEmployee___photo___atimeMs',
  ChildEmployeePhotoMtimeMs = 'childEmployee___photo___mtimeMs',
  ChildEmployeePhotoCtimeMs = 'childEmployee___photo___ctimeMs',
  ChildEmployeePhotoAtime = 'childEmployee___photo___atime',
  ChildEmployeePhotoMtime = 'childEmployee___photo___mtime',
  ChildEmployeePhotoCtime = 'childEmployee___photo___ctime',
  ChildEmployeePhotoBirthtime = 'childEmployee___photo___birthtime',
  ChildEmployeePhotoBirthtimeMs = 'childEmployee___photo___birthtimeMs',
  ChildEmployeePhotoBlksize = 'childEmployee___photo___blksize',
  ChildEmployeePhotoBlocks = 'childEmployee___photo___blocks',
  ChildEmployeePhotoPublicUrl = 'childEmployee___photo___publicURL',
  ChildEmployeePhotoChildrenImageSharp = 'childEmployee___photo___childrenImageSharp',
  ChildEmployeePhotoChildrenImageSharpGatsbyImageData = 'childEmployee___photo___childrenImageSharp___gatsbyImageData',
  ChildEmployeePhotoChildrenImageSharpId = 'childEmployee___photo___childrenImageSharp___id',
  ChildEmployeePhotoChildrenImageSharpChildren = 'childEmployee___photo___childrenImageSharp___children',
  ChildEmployeePhotoChildImageSharpGatsbyImageData = 'childEmployee___photo___childImageSharp___gatsbyImageData',
  ChildEmployeePhotoChildImageSharpId = 'childEmployee___photo___childImageSharp___id',
  ChildEmployeePhotoChildImageSharpChildren = 'childEmployee___photo___childImageSharp___children',
  ChildEmployeePhotoChildrenMdx = 'childEmployee___photo___childrenMdx',
  ChildEmployeePhotoChildrenMdxRawBody = 'childEmployee___photo___childrenMdx___rawBody',
  ChildEmployeePhotoChildrenMdxFileAbsolutePath = 'childEmployee___photo___childrenMdx___fileAbsolutePath',
  ChildEmployeePhotoChildrenMdxSlug = 'childEmployee___photo___childrenMdx___slug',
  ChildEmployeePhotoChildrenMdxBody = 'childEmployee___photo___childrenMdx___body',
  ChildEmployeePhotoChildrenMdxExcerpt = 'childEmployee___photo___childrenMdx___excerpt',
  ChildEmployeePhotoChildrenMdxHeadings = 'childEmployee___photo___childrenMdx___headings',
  ChildEmployeePhotoChildrenMdxHtml = 'childEmployee___photo___childrenMdx___html',
  ChildEmployeePhotoChildrenMdxMdxAst = 'childEmployee___photo___childrenMdx___mdxAST',
  ChildEmployeePhotoChildrenMdxTableOfContents = 'childEmployee___photo___childrenMdx___tableOfContents',
  ChildEmployeePhotoChildrenMdxTimeToRead = 'childEmployee___photo___childrenMdx___timeToRead',
  ChildEmployeePhotoChildrenMdxId = 'childEmployee___photo___childrenMdx___id',
  ChildEmployeePhotoChildrenMdxChildren = 'childEmployee___photo___childrenMdx___children',
  ChildEmployeePhotoChildMdxRawBody = 'childEmployee___photo___childMdx___rawBody',
  ChildEmployeePhotoChildMdxFileAbsolutePath = 'childEmployee___photo___childMdx___fileAbsolutePath',
  ChildEmployeePhotoChildMdxSlug = 'childEmployee___photo___childMdx___slug',
  ChildEmployeePhotoChildMdxBody = 'childEmployee___photo___childMdx___body',
  ChildEmployeePhotoChildMdxExcerpt = 'childEmployee___photo___childMdx___excerpt',
  ChildEmployeePhotoChildMdxHeadings = 'childEmployee___photo___childMdx___headings',
  ChildEmployeePhotoChildMdxHtml = 'childEmployee___photo___childMdx___html',
  ChildEmployeePhotoChildMdxMdxAst = 'childEmployee___photo___childMdx___mdxAST',
  ChildEmployeePhotoChildMdxTableOfContents = 'childEmployee___photo___childMdx___tableOfContents',
  ChildEmployeePhotoChildMdxTimeToRead = 'childEmployee___photo___childMdx___timeToRead',
  ChildEmployeePhotoChildMdxId = 'childEmployee___photo___childMdx___id',
  ChildEmployeePhotoChildMdxChildren = 'childEmployee___photo___childMdx___children',
  ChildEmployeePhotoChildrenEmployee = 'childEmployee___photo___childrenEmployee',
  ChildEmployeePhotoChildrenEmployeeId = 'childEmployee___photo___childrenEmployee___id',
  ChildEmployeePhotoChildrenEmployeeChildren = 'childEmployee___photo___childrenEmployee___children',
  ChildEmployeePhotoChildrenEmployeeType = 'childEmployee___photo___childrenEmployee___type',
  ChildEmployeePhotoChildrenEmployeeName = 'childEmployee___photo___childrenEmployee___name',
  ChildEmployeePhotoChildrenEmployeeEmail = 'childEmployee___photo___childrenEmployee___email',
  ChildEmployeePhotoChildrenEmployeePhoneNumber = 'childEmployee___photo___childrenEmployee___phoneNumber',
  ChildEmployeePhotoChildEmployeeId = 'childEmployee___photo___childEmployee___id',
  ChildEmployeePhotoChildEmployeeChildren = 'childEmployee___photo___childEmployee___children',
  ChildEmployeePhotoChildEmployeeType = 'childEmployee___photo___childEmployee___type',
  ChildEmployeePhotoChildEmployeeName = 'childEmployee___photo___childEmployee___name',
  ChildEmployeePhotoChildEmployeeEmail = 'childEmployee___photo___childEmployee___email',
  ChildEmployeePhotoChildEmployeePhoneNumber = 'childEmployee___photo___childEmployee___phoneNumber',
  ChildEmployeePhotoId = 'childEmployee___photo___id',
  ChildEmployeePhotoParentId = 'childEmployee___photo___parent___id',
  ChildEmployeePhotoParentChildren = 'childEmployee___photo___parent___children',
  ChildEmployeePhotoChildren = 'childEmployee___photo___children',
  ChildEmployeePhotoChildrenId = 'childEmployee___photo___children___id',
  ChildEmployeePhotoChildrenChildren = 'childEmployee___photo___children___children',
  ChildEmployeePhotoInternalContent = 'childEmployee___photo___internal___content',
  ChildEmployeePhotoInternalContentDigest = 'childEmployee___photo___internal___contentDigest',
  ChildEmployeePhotoInternalDescription = 'childEmployee___photo___internal___description',
  ChildEmployeePhotoInternalFieldOwners = 'childEmployee___photo___internal___fieldOwners',
  ChildEmployeePhotoInternalIgnoreType = 'childEmployee___photo___internal___ignoreType',
  ChildEmployeePhotoInternalMediaType = 'childEmployee___photo___internal___mediaType',
  ChildEmployeePhotoInternalOwner = 'childEmployee___photo___internal___owner',
  ChildEmployeePhotoInternalType = 'childEmployee___photo___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

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
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  childrenEmployee?: Maybe<EmployeeFilterListInput>;
  childEmployee?: Maybe<EmployeeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
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

export enum HeadingsMdx {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION',
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE',
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Auto = 'AUTO',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
  Avif = 'AVIF',
}

export enum ImageLayout {
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
  Constrained = 'CONSTRAINED',
}

export enum ImagePlaceholder {
  DominantColor = 'DOMINANT_COLOR',
  TracedSvg = 'TRACED_SVG',
  Blurred = 'BLURRED',
  None = 'NONE',
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  GatsbyImageData = 'gatsbyImageData',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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

export type Internal = {
  __typename?: 'Internal';
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

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  id: Scalars['ID'];
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerpt?: Maybe<Scalars['String']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};

export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  Html = 'html',
  HtmlAst = 'htmlAst',
  Excerpt = 'excerpt',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type Mdx = Node & {
  __typename?: 'Mdx';
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
  __typename?: 'MdxConnection';
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
  __typename?: 'MdxEdge';
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export enum MdxFieldsEnum {
  RawBody = 'rawBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterLanguage = 'frontmatter___language',
  FrontmatterId = 'frontmatter___id',
  FrontmatterType = 'frontmatter___type',
  FrontmatterSlug = 'frontmatter___slug',
  FrontmatterImageSourceInstanceName = 'frontmatter___image___sourceInstanceName',
  FrontmatterImageAbsolutePath = 'frontmatter___image___absolutePath',
  FrontmatterImageRelativePath = 'frontmatter___image___relativePath',
  FrontmatterImageExtension = 'frontmatter___image___extension',
  FrontmatterImageSize = 'frontmatter___image___size',
  FrontmatterImagePrettySize = 'frontmatter___image___prettySize',
  FrontmatterImageModifiedTime = 'frontmatter___image___modifiedTime',
  FrontmatterImageAccessTime = 'frontmatter___image___accessTime',
  FrontmatterImageChangeTime = 'frontmatter___image___changeTime',
  FrontmatterImageBirthTime = 'frontmatter___image___birthTime',
  FrontmatterImageRoot = 'frontmatter___image___root',
  FrontmatterImageDir = 'frontmatter___image___dir',
  FrontmatterImageBase = 'frontmatter___image___base',
  FrontmatterImageExt = 'frontmatter___image___ext',
  FrontmatterImageName = 'frontmatter___image___name',
  FrontmatterImageRelativeDirectory = 'frontmatter___image___relativeDirectory',
  FrontmatterImageDev = 'frontmatter___image___dev',
  FrontmatterImageMode = 'frontmatter___image___mode',
  FrontmatterImageNlink = 'frontmatter___image___nlink',
  FrontmatterImageUid = 'frontmatter___image___uid',
  FrontmatterImageGid = 'frontmatter___image___gid',
  FrontmatterImageRdev = 'frontmatter___image___rdev',
  FrontmatterImageIno = 'frontmatter___image___ino',
  FrontmatterImageAtimeMs = 'frontmatter___image___atimeMs',
  FrontmatterImageMtimeMs = 'frontmatter___image___mtimeMs',
  FrontmatterImageCtimeMs = 'frontmatter___image___ctimeMs',
  FrontmatterImageAtime = 'frontmatter___image___atime',
  FrontmatterImageMtime = 'frontmatter___image___mtime',
  FrontmatterImageCtime = 'frontmatter___image___ctime',
  FrontmatterImageBirthtime = 'frontmatter___image___birthtime',
  FrontmatterImageBirthtimeMs = 'frontmatter___image___birthtimeMs',
  FrontmatterImageBlksize = 'frontmatter___image___blksize',
  FrontmatterImageBlocks = 'frontmatter___image___blocks',
  FrontmatterImagePublicUrl = 'frontmatter___image___publicURL',
  FrontmatterImageChildrenImageSharp = 'frontmatter___image___childrenImageSharp',
  FrontmatterImageChildrenImageSharpGatsbyImageData = 'frontmatter___image___childrenImageSharp___gatsbyImageData',
  FrontmatterImageChildrenImageSharpId = 'frontmatter___image___childrenImageSharp___id',
  FrontmatterImageChildrenImageSharpChildren = 'frontmatter___image___childrenImageSharp___children',
  FrontmatterImageChildImageSharpGatsbyImageData = 'frontmatter___image___childImageSharp___gatsbyImageData',
  FrontmatterImageChildImageSharpId = 'frontmatter___image___childImageSharp___id',
  FrontmatterImageChildImageSharpChildren = 'frontmatter___image___childImageSharp___children',
  FrontmatterImageChildrenMdx = 'frontmatter___image___childrenMdx',
  FrontmatterImageChildrenMdxRawBody = 'frontmatter___image___childrenMdx___rawBody',
  FrontmatterImageChildrenMdxFileAbsolutePath = 'frontmatter___image___childrenMdx___fileAbsolutePath',
  FrontmatterImageChildrenMdxSlug = 'frontmatter___image___childrenMdx___slug',
  FrontmatterImageChildrenMdxBody = 'frontmatter___image___childrenMdx___body',
  FrontmatterImageChildrenMdxExcerpt = 'frontmatter___image___childrenMdx___excerpt',
  FrontmatterImageChildrenMdxHeadings = 'frontmatter___image___childrenMdx___headings',
  FrontmatterImageChildrenMdxHtml = 'frontmatter___image___childrenMdx___html',
  FrontmatterImageChildrenMdxMdxAst = 'frontmatter___image___childrenMdx___mdxAST',
  FrontmatterImageChildrenMdxTableOfContents = 'frontmatter___image___childrenMdx___tableOfContents',
  FrontmatterImageChildrenMdxTimeToRead = 'frontmatter___image___childrenMdx___timeToRead',
  FrontmatterImageChildrenMdxId = 'frontmatter___image___childrenMdx___id',
  FrontmatterImageChildrenMdxChildren = 'frontmatter___image___childrenMdx___children',
  FrontmatterImageChildMdxRawBody = 'frontmatter___image___childMdx___rawBody',
  FrontmatterImageChildMdxFileAbsolutePath = 'frontmatter___image___childMdx___fileAbsolutePath',
  FrontmatterImageChildMdxSlug = 'frontmatter___image___childMdx___slug',
  FrontmatterImageChildMdxBody = 'frontmatter___image___childMdx___body',
  FrontmatterImageChildMdxExcerpt = 'frontmatter___image___childMdx___excerpt',
  FrontmatterImageChildMdxHeadings = 'frontmatter___image___childMdx___headings',
  FrontmatterImageChildMdxHtml = 'frontmatter___image___childMdx___html',
  FrontmatterImageChildMdxMdxAst = 'frontmatter___image___childMdx___mdxAST',
  FrontmatterImageChildMdxTableOfContents = 'frontmatter___image___childMdx___tableOfContents',
  FrontmatterImageChildMdxTimeToRead = 'frontmatter___image___childMdx___timeToRead',
  FrontmatterImageChildMdxId = 'frontmatter___image___childMdx___id',
  FrontmatterImageChildMdxChildren = 'frontmatter___image___childMdx___children',
  FrontmatterImageChildrenEmployee = 'frontmatter___image___childrenEmployee',
  FrontmatterImageChildrenEmployeeId = 'frontmatter___image___childrenEmployee___id',
  FrontmatterImageChildrenEmployeeChildren = 'frontmatter___image___childrenEmployee___children',
  FrontmatterImageChildrenEmployeeType = 'frontmatter___image___childrenEmployee___type',
  FrontmatterImageChildrenEmployeeName = 'frontmatter___image___childrenEmployee___name',
  FrontmatterImageChildrenEmployeeEmail = 'frontmatter___image___childrenEmployee___email',
  FrontmatterImageChildrenEmployeePhoneNumber = 'frontmatter___image___childrenEmployee___phoneNumber',
  FrontmatterImageChildEmployeeId = 'frontmatter___image___childEmployee___id',
  FrontmatterImageChildEmployeeChildren = 'frontmatter___image___childEmployee___children',
  FrontmatterImageChildEmployeeType = 'frontmatter___image___childEmployee___type',
  FrontmatterImageChildEmployeeName = 'frontmatter___image___childEmployee___name',
  FrontmatterImageChildEmployeeEmail = 'frontmatter___image___childEmployee___email',
  FrontmatterImageChildEmployeePhoneNumber = 'frontmatter___image___childEmployee___phoneNumber',
  FrontmatterImageId = 'frontmatter___image___id',
  FrontmatterImageParentId = 'frontmatter___image___parent___id',
  FrontmatterImageParentChildren = 'frontmatter___image___parent___children',
  FrontmatterImageChildren = 'frontmatter___image___children',
  FrontmatterImageChildrenId = 'frontmatter___image___children___id',
  FrontmatterImageChildrenChildren = 'frontmatter___image___children___children',
  FrontmatterImageInternalContent = 'frontmatter___image___internal___content',
  FrontmatterImageInternalContentDigest = 'frontmatter___image___internal___contentDigest',
  FrontmatterImageInternalDescription = 'frontmatter___image___internal___description',
  FrontmatterImageInternalFieldOwners = 'frontmatter___image___internal___fieldOwners',
  FrontmatterImageInternalIgnoreType = 'frontmatter___image___internal___ignoreType',
  FrontmatterImageInternalMediaType = 'frontmatter___image___internal___mediaType',
  FrontmatterImageInternalOwner = 'frontmatter___image___internal___owner',
  FrontmatterImageInternalType = 'frontmatter___image___internal___type',
  Slug = 'slug',
  Body = 'body',
  Excerpt = 'excerpt',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  Html = 'html',
  MdxAst = 'mdxAST',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

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
  __typename?: 'MdxFrontmatter';
  title: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  image?: Maybe<File>;
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
};

export type MdxGroupConnection = {
  __typename?: 'MdxGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
  __typename?: 'MdxHeadingMdx';
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
  __typename?: 'MdxWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
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

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  themeUiConfig?: Maybe<ThemeUiConfig>;
  allThemeUiConfig: ThemeUiConfigConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  employee?: Maybe<Employee>;
  allEmployee: EmployeeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  staticImage?: Maybe<StaticImage>;
  allStaticImage: StaticImageConnection;
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
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  childrenEmployee?: Maybe<EmployeeFilterListInput>;
  childEmployee?: Maybe<EmployeeFilterInput>;
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
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  context?: Maybe<SitePageContextFilterInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
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

export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
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

export type QueryEmployeeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  position?: Maybe<EmployeePositionFilterInput>;
  email?: Maybe<StringQueryOperatorInput>;
  phoneNumber?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<FileFilterInput>;
};

export type QueryAllEmployeeArgs = {
  filter?: Maybe<EmployeeFilterInput>;
  sort?: Maybe<EmployeeSortInput>;
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

export type QueryStaticImageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
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
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllStaticImageArgs = {
  filter?: Maybe<StaticImageFilterInput>;
  sort?: Maybe<StaticImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
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
  __typename?: 'SiteBuildMetadata';
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
  __typename?: 'SiteBuildMetadataConnection';
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
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime',
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
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
  __typename?: 'SiteConnection';
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
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataTitleTemplate = 'siteMetadata___titleTemplate',
  SiteMetadataImage = 'siteMetadata___image',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

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
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  context?: Maybe<SitePageContext>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
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
  __typename?: 'SitePageContext';
  slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  langKey?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  langKey?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsNodeApIs = 'pluginCreator___pluginOptions___plugins___nodeAPIs',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsOutput = 'pluginCreator___pluginOptions___output',
  PluginCreatorPluginOptionsCreateLinkInHead = 'pluginCreator___pluginOptions___createLinkInHead',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
  PluginCreatorPluginOptionsLinkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
  PluginCreatorPluginOptionsShowCaptions = 'pluginCreator___pluginOptions___showCaptions',
  PluginCreatorPluginOptionsMarkdownCaptions = 'pluginCreator___pluginOptions___markdownCaptions',
  PluginCreatorPluginOptionsSizeByPixelDensity = 'pluginCreator___pluginOptions___sizeByPixelDensity',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___backgroundColor',
  PluginCreatorPluginOptionsQuality = 'pluginCreator___pluginOptions___quality',
  PluginCreatorPluginOptionsWithWebp = 'pluginCreator___pluginOptions___withWebp',
  PluginCreatorPluginOptionsTracedSvg = 'pluginCreator___pluginOptions___tracedSVG',
  PluginCreatorPluginOptionsLoading = 'pluginCreator___pluginOptions___loading',
  PluginCreatorPluginOptionsDisableBgImageOnAlpha = 'pluginCreator___pluginOptions___disableBgImageOnAlpha',
  PluginCreatorPluginOptionsDisableBgImage = 'pluginCreator___pluginOptions___disableBgImage',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsLangKeyDefault = 'pluginCreator___pluginOptions___langKeyDefault',
  PluginCreatorPluginOptionsLangKeyForNull = 'pluginCreator___pluginOptions___langKeyForNull',
  PluginCreatorPluginOptionsPrefixDefault = 'pluginCreator___pluginOptions___prefixDefault',
  PluginCreatorPluginOptionsUseLangKeyLayout = 'pluginCreator___pluginOptions___useLangKeyLayout',
  PluginCreatorPluginOptionsCustomFamilies = 'pluginCreator___pluginOptions___custom___families',
  PluginCreatorPluginOptionsCustomUrls = 'pluginCreator___pluginOptions___custom___urls',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsGatsbyRemarkPlugins = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins',
  PluginCreatorPluginOptionsGatsbyRemarkPluginsResolve = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve',
  PluginCreatorPluginOptionsDefaultLayoutsDefault = 'pluginCreator___pluginOptions___defaultLayouts___default',
  PluginCreatorPluginOptionsExtensions = 'pluginCreator___pluginOptions___extensions',
  PluginCreatorPluginOptionsLessBabel = 'pluginCreator___pluginOptions___lessBabel',
  PluginCreatorPluginOptionsMediaTypes = 'pluginCreator___pluginOptions___mediaTypes',
  PluginCreatorPluginOptionsRoot = 'pluginCreator___pluginOptions___root',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ContextSlug = 'context___slug',
  ContextLang = 'context___lang',
  ContextLangKey = 'context___langKey',
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  context?: Maybe<SitePageContextFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
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
  __typename?: 'SitePlugin';
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
  __typename?: 'SitePluginConnection';
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
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  PluginOptionsPluginsPluginOptionsLinkImagesToOriginal = 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal',
  PluginOptionsPluginsPluginOptionsShowCaptions = 'pluginOptions___plugins___pluginOptions___showCaptions',
  PluginOptionsPluginsPluginOptionsMarkdownCaptions = 'pluginOptions___plugins___pluginOptions___markdownCaptions',
  PluginOptionsPluginsPluginOptionsSizeByPixelDensity = 'pluginOptions___plugins___pluginOptions___sizeByPixelDensity',
  PluginOptionsPluginsPluginOptionsBackgroundColor = 'pluginOptions___plugins___pluginOptions___backgroundColor',
  PluginOptionsPluginsPluginOptionsQuality = 'pluginOptions___plugins___pluginOptions___quality',
  PluginOptionsPluginsPluginOptionsWithWebp = 'pluginOptions___plugins___pluginOptions___withWebp',
  PluginOptionsPluginsPluginOptionsTracedSvg = 'pluginOptions___plugins___pluginOptions___tracedSVG',
  PluginOptionsPluginsPluginOptionsLoading = 'pluginOptions___plugins___pluginOptions___loading',
  PluginOptionsPluginsPluginOptionsDisableBgImageOnAlpha = 'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha',
  PluginOptionsPluginsPluginOptionsDisableBgImage = 'pluginOptions___plugins___pluginOptions___disableBgImage',
  PluginOptionsPluginsNodeApIs = 'pluginOptions___plugins___nodeAPIs',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsOutput = 'pluginOptions___output',
  PluginOptionsCreateLinkInHead = 'pluginOptions___createLinkInHead',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsShowCaptions = 'pluginOptions___showCaptions',
  PluginOptionsMarkdownCaptions = 'pluginOptions___markdownCaptions',
  PluginOptionsSizeByPixelDensity = 'pluginOptions___sizeByPixelDensity',
  PluginOptionsBackgroundColor = 'pluginOptions___backgroundColor',
  PluginOptionsQuality = 'pluginOptions___quality',
  PluginOptionsWithWebp = 'pluginOptions___withWebp',
  PluginOptionsTracedSvg = 'pluginOptions___tracedSVG',
  PluginOptionsLoading = 'pluginOptions___loading',
  PluginOptionsDisableBgImageOnAlpha = 'pluginOptions___disableBgImageOnAlpha',
  PluginOptionsDisableBgImage = 'pluginOptions___disableBgImage',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsLangKeyDefault = 'pluginOptions___langKeyDefault',
  PluginOptionsLangKeyForNull = 'pluginOptions___langKeyForNull',
  PluginOptionsPrefixDefault = 'pluginOptions___prefixDefault',
  PluginOptionsUseLangKeyLayout = 'pluginOptions___useLangKeyLayout',
  PluginOptionsCustomFamilies = 'pluginOptions___custom___families',
  PluginOptionsCustomUrls = 'pluginOptions___custom___urls',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsGatsbyRemarkPlugins = 'pluginOptions___gatsbyRemarkPlugins',
  PluginOptionsGatsbyRemarkPluginsResolve = 'pluginOptions___gatsbyRemarkPlugins___resolve',
  PluginOptionsGatsbyRemarkPluginsOptionsMaxWidth = 'pluginOptions___gatsbyRemarkPlugins___options___maxWidth',
  PluginOptionsDefaultLayoutsDefault = 'pluginOptions___defaultLayouts___default',
  PluginOptionsExtensions = 'pluginOptions___extensions',
  PluginOptionsLessBabel = 'pluginOptions___lessBabel',
  PluginOptionsMediaTypes = 'pluginOptions___mediaTypes',
  PluginOptionsRoot = 'pluginOptions___root',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

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
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
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
  __typename?: 'SitePluginPackageJsonDependencies';
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
  __typename?: 'SitePluginPackageJsonDevDependencies';
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
  __typename?: 'SitePluginPackageJsonPeerDependencies';
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
  __typename?: 'SitePluginPluginOptions';
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  maxWidth?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  langKeyDefault?: Maybe<Scalars['String']>;
  langKeyForNull?: Maybe<Scalars['String']>;
  prefixDefault?: Maybe<Scalars['Boolean']>;
  useLangKeyLayout?: Maybe<Scalars['Boolean']>;
  custom?: Maybe<SitePluginPluginOptionsCustom>;
  path?: Maybe<Scalars['String']>;
  gatsbyRemarkPlugins?: Maybe<
    Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>
  >;
  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayouts>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  lessBabel?: Maybe<Scalars['Boolean']>;
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  root?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsCustom = {
  __typename?: 'SitePluginPluginOptionsCustom';
  families?: Maybe<Array<Maybe<Scalars['String']>>>;
  urls?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsCustomFilterInput = {
  families?: Maybe<StringQueryOperatorInput>;
  urls?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsDefaultLayouts = {
  __typename?: 'SitePluginPluginOptionsDefaultLayouts';
  default?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaultLayoutsFilterInput = {
  default?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  langKeyDefault?: Maybe<StringQueryOperatorInput>;
  langKeyForNull?: Maybe<StringQueryOperatorInput>;
  prefixDefault?: Maybe<BooleanQueryOperatorInput>;
  useLangKeyLayout?: Maybe<BooleanQueryOperatorInput>;
  custom?: Maybe<SitePluginPluginOptionsCustomFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  gatsbyRemarkPlugins?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>;
  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayoutsFilterInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  lessBabel?: Maybe<BooleanQueryOperatorInput>;
  mediaTypes?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPlugins = {
  __typename?: 'SitePluginPluginOptionsGatsbyRemarkPlugins';
  resolve?: Maybe<Scalars['String']>;
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
  __typename?: 'SitePluginPluginOptionsGatsbyRemarkPluginsOptions';
  maxWidth?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
  __typename?: 'SitePluginPluginOptionsPlugins';
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  __typename?: 'SitePluginPluginOptionsPluginsPluginOptions';
  maxWidth?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  titleTemplate?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  titleTemplate?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StaticImage = Node & {
  __typename?: 'StaticImage';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  sourceInstanceName?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  prettySize?: Maybe<Scalars['String']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  accessTime?: Maybe<Scalars['Date']>;
  changeTime?: Maybe<Scalars['Date']>;
  birthTime?: Maybe<Scalars['Date']>;
  root?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativeDirectory?: Maybe<Scalars['String']>;
  dev?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['Int']>;
  nlink?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  rdev?: Maybe<Scalars['Int']>;
  blksize?: Maybe<Scalars['Int']>;
  ino?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  atimeMs?: Maybe<Scalars['Float']>;
  mtimeMs?: Maybe<Scalars['Float']>;
  ctimeMs?: Maybe<Scalars['Float']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  atime?: Maybe<Scalars['Date']>;
  mtime?: Maybe<Scalars['Date']>;
  ctime?: Maybe<Scalars['Date']>;
  birthtime?: Maybe<Scalars['Date']>;
};

export type StaticImageModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StaticImageAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StaticImageChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StaticImageBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StaticImageAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StaticImageMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StaticImageCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StaticImageBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StaticImageConnection = {
  __typename?: 'StaticImageConnection';
  totalCount: Scalars['Int'];
  edges: Array<StaticImageEdge>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StaticImageGroupConnection>;
};

export type StaticImageConnectionDistinctArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StaticImageFieldsEnum;
};

export type StaticImageEdge = {
  __typename?: 'StaticImageEdge';
  next?: Maybe<StaticImage>;
  node: StaticImage;
  previous?: Maybe<StaticImage>;
};

export enum StaticImageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  RelativePath = 'relativePath',
  Extension = 'extension',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  AbsolutePath = 'absolutePath',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Size = 'size',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export type StaticImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
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
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
};

export type StaticImageGroupConnection = {
  __typename?: 'StaticImageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<StaticImageEdge>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StaticImageSortInput = {
  fields?: Maybe<Array<Maybe<StaticImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type ThemeUiConfig = Node & {
  __typename?: 'ThemeUiConfig';
  preset?: Maybe<Scalars['JSON']>;
  prismPreset?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ThemeUiConfigConnection = {
  __typename?: 'ThemeUiConfigConnection';
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
  __typename?: 'ThemeUiConfigEdge';
  next?: Maybe<ThemeUiConfig>;
  node: ThemeUiConfig;
  previous?: Maybe<ThemeUiConfig>;
};

export enum ThemeUiConfigFieldsEnum {
  Preset = 'preset',
  PrismPreset = 'prismPreset',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ThemeUiConfigFilterInput = {
  preset?: Maybe<JsonQueryOperatorInput>;
  prismPreset?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ThemeUiConfigGroupConnection = {
  __typename?: 'ThemeUiConfigGroupConnection';
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

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type Employee = Node & {
  __typename?: 'employee';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<EmployeePosition>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  photo?: Maybe<File>;
};

export type EmployeeConnection = {
  __typename?: 'employeeConnection';
  totalCount: Scalars['Int'];
  edges: Array<EmployeeEdge>;
  nodes: Array<Employee>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<EmployeeGroupConnection>;
};

export type EmployeeConnectionDistinctArgs = {
  field: EmployeeFieldsEnum;
};

export type EmployeeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: EmployeeFieldsEnum;
};

export type EmployeeEdge = {
  __typename?: 'employeeEdge';
  next?: Maybe<Employee>;
  node: Employee;
  previous?: Maybe<Employee>;
};

export enum EmployeeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Type = 'type',
  Name = 'name',
  PositionEn = 'position___en',
  PositionNb = 'position___nb',
  Email = 'email',
  PhoneNumber = 'phoneNumber',
  PhotoSourceInstanceName = 'photo___sourceInstanceName',
  PhotoAbsolutePath = 'photo___absolutePath',
  PhotoRelativePath = 'photo___relativePath',
  PhotoExtension = 'photo___extension',
  PhotoSize = 'photo___size',
  PhotoPrettySize = 'photo___prettySize',
  PhotoModifiedTime = 'photo___modifiedTime',
  PhotoAccessTime = 'photo___accessTime',
  PhotoChangeTime = 'photo___changeTime',
  PhotoBirthTime = 'photo___birthTime',
  PhotoRoot = 'photo___root',
  PhotoDir = 'photo___dir',
  PhotoBase = 'photo___base',
  PhotoExt = 'photo___ext',
  PhotoName = 'photo___name',
  PhotoRelativeDirectory = 'photo___relativeDirectory',
  PhotoDev = 'photo___dev',
  PhotoMode = 'photo___mode',
  PhotoNlink = 'photo___nlink',
  PhotoUid = 'photo___uid',
  PhotoGid = 'photo___gid',
  PhotoRdev = 'photo___rdev',
  PhotoIno = 'photo___ino',
  PhotoAtimeMs = 'photo___atimeMs',
  PhotoMtimeMs = 'photo___mtimeMs',
  PhotoCtimeMs = 'photo___ctimeMs',
  PhotoAtime = 'photo___atime',
  PhotoMtime = 'photo___mtime',
  PhotoCtime = 'photo___ctime',
  PhotoBirthtime = 'photo___birthtime',
  PhotoBirthtimeMs = 'photo___birthtimeMs',
  PhotoBlksize = 'photo___blksize',
  PhotoBlocks = 'photo___blocks',
  PhotoPublicUrl = 'photo___publicURL',
  PhotoChildrenImageSharp = 'photo___childrenImageSharp',
  PhotoChildrenImageSharpFixedBase64 = 'photo___childrenImageSharp___fixed___base64',
  PhotoChildrenImageSharpFixedTracedSvg = 'photo___childrenImageSharp___fixed___tracedSVG',
  PhotoChildrenImageSharpFixedAspectRatio = 'photo___childrenImageSharp___fixed___aspectRatio',
  PhotoChildrenImageSharpFixedWidth = 'photo___childrenImageSharp___fixed___width',
  PhotoChildrenImageSharpFixedHeight = 'photo___childrenImageSharp___fixed___height',
  PhotoChildrenImageSharpFixedSrc = 'photo___childrenImageSharp___fixed___src',
  PhotoChildrenImageSharpFixedSrcSet = 'photo___childrenImageSharp___fixed___srcSet',
  PhotoChildrenImageSharpFixedSrcWebp = 'photo___childrenImageSharp___fixed___srcWebp',
  PhotoChildrenImageSharpFixedSrcSetWebp = 'photo___childrenImageSharp___fixed___srcSetWebp',
  PhotoChildrenImageSharpFixedOriginalName = 'photo___childrenImageSharp___fixed___originalName',
  PhotoChildrenImageSharpFluidBase64 = 'photo___childrenImageSharp___fluid___base64',
  PhotoChildrenImageSharpFluidTracedSvg = 'photo___childrenImageSharp___fluid___tracedSVG',
  PhotoChildrenImageSharpFluidAspectRatio = 'photo___childrenImageSharp___fluid___aspectRatio',
  PhotoChildrenImageSharpFluidSrc = 'photo___childrenImageSharp___fluid___src',
  PhotoChildrenImageSharpFluidSrcSet = 'photo___childrenImageSharp___fluid___srcSet',
  PhotoChildrenImageSharpFluidSrcWebp = 'photo___childrenImageSharp___fluid___srcWebp',
  PhotoChildrenImageSharpFluidSrcSetWebp = 'photo___childrenImageSharp___fluid___srcSetWebp',
  PhotoChildrenImageSharpFluidSizes = 'photo___childrenImageSharp___fluid___sizes',
  PhotoChildrenImageSharpFluidOriginalImg = 'photo___childrenImageSharp___fluid___originalImg',
  PhotoChildrenImageSharpFluidOriginalName = 'photo___childrenImageSharp___fluid___originalName',
  PhotoChildrenImageSharpFluidPresentationWidth = 'photo___childrenImageSharp___fluid___presentationWidth',
  PhotoChildrenImageSharpFluidPresentationHeight = 'photo___childrenImageSharp___fluid___presentationHeight',
  PhotoChildrenImageSharpGatsbyImageData = 'photo___childrenImageSharp___gatsbyImageData',
  PhotoChildrenImageSharpOriginalWidth = 'photo___childrenImageSharp___original___width',
  PhotoChildrenImageSharpOriginalHeight = 'photo___childrenImageSharp___original___height',
  PhotoChildrenImageSharpOriginalSrc = 'photo___childrenImageSharp___original___src',
  PhotoChildrenImageSharpResizeSrc = 'photo___childrenImageSharp___resize___src',
  PhotoChildrenImageSharpResizeTracedSvg = 'photo___childrenImageSharp___resize___tracedSVG',
  PhotoChildrenImageSharpResizeWidth = 'photo___childrenImageSharp___resize___width',
  PhotoChildrenImageSharpResizeHeight = 'photo___childrenImageSharp___resize___height',
  PhotoChildrenImageSharpResizeAspectRatio = 'photo___childrenImageSharp___resize___aspectRatio',
  PhotoChildrenImageSharpResizeOriginalName = 'photo___childrenImageSharp___resize___originalName',
  PhotoChildrenImageSharpId = 'photo___childrenImageSharp___id',
  PhotoChildrenImageSharpParentId = 'photo___childrenImageSharp___parent___id',
  PhotoChildrenImageSharpParentChildren = 'photo___childrenImageSharp___parent___children',
  PhotoChildrenImageSharpChildren = 'photo___childrenImageSharp___children',
  PhotoChildrenImageSharpChildrenId = 'photo___childrenImageSharp___children___id',
  PhotoChildrenImageSharpChildrenChildren = 'photo___childrenImageSharp___children___children',
  PhotoChildrenImageSharpInternalContent = 'photo___childrenImageSharp___internal___content',
  PhotoChildrenImageSharpInternalContentDigest = 'photo___childrenImageSharp___internal___contentDigest',
  PhotoChildrenImageSharpInternalDescription = 'photo___childrenImageSharp___internal___description',
  PhotoChildrenImageSharpInternalFieldOwners = 'photo___childrenImageSharp___internal___fieldOwners',
  PhotoChildrenImageSharpInternalIgnoreType = 'photo___childrenImageSharp___internal___ignoreType',
  PhotoChildrenImageSharpInternalMediaType = 'photo___childrenImageSharp___internal___mediaType',
  PhotoChildrenImageSharpInternalOwner = 'photo___childrenImageSharp___internal___owner',
  PhotoChildrenImageSharpInternalType = 'photo___childrenImageSharp___internal___type',
  PhotoChildImageSharpFixedBase64 = 'photo___childImageSharp___fixed___base64',
  PhotoChildImageSharpFixedTracedSvg = 'photo___childImageSharp___fixed___tracedSVG',
  PhotoChildImageSharpFixedAspectRatio = 'photo___childImageSharp___fixed___aspectRatio',
  PhotoChildImageSharpFixedWidth = 'photo___childImageSharp___fixed___width',
  PhotoChildImageSharpFixedHeight = 'photo___childImageSharp___fixed___height',
  PhotoChildImageSharpFixedSrc = 'photo___childImageSharp___fixed___src',
  PhotoChildImageSharpFixedSrcSet = 'photo___childImageSharp___fixed___srcSet',
  PhotoChildImageSharpFixedSrcWebp = 'photo___childImageSharp___fixed___srcWebp',
  PhotoChildImageSharpFixedSrcSetWebp = 'photo___childImageSharp___fixed___srcSetWebp',
  PhotoChildImageSharpFixedOriginalName = 'photo___childImageSharp___fixed___originalName',
  PhotoChildImageSharpFluidBase64 = 'photo___childImageSharp___fluid___base64',
  PhotoChildImageSharpFluidTracedSvg = 'photo___childImageSharp___fluid___tracedSVG',
  PhotoChildImageSharpFluidAspectRatio = 'photo___childImageSharp___fluid___aspectRatio',
  PhotoChildImageSharpFluidSrc = 'photo___childImageSharp___fluid___src',
  PhotoChildImageSharpFluidSrcSet = 'photo___childImageSharp___fluid___srcSet',
  PhotoChildImageSharpFluidSrcWebp = 'photo___childImageSharp___fluid___srcWebp',
  PhotoChildImageSharpFluidSrcSetWebp = 'photo___childImageSharp___fluid___srcSetWebp',
  PhotoChildImageSharpFluidSizes = 'photo___childImageSharp___fluid___sizes',
  PhotoChildImageSharpFluidOriginalImg = 'photo___childImageSharp___fluid___originalImg',
  PhotoChildImageSharpFluidOriginalName = 'photo___childImageSharp___fluid___originalName',
  PhotoChildImageSharpFluidPresentationWidth = 'photo___childImageSharp___fluid___presentationWidth',
  PhotoChildImageSharpFluidPresentationHeight = 'photo___childImageSharp___fluid___presentationHeight',
  PhotoChildImageSharpGatsbyImageData = 'photo___childImageSharp___gatsbyImageData',
  PhotoChildImageSharpOriginalWidth = 'photo___childImageSharp___original___width',
  PhotoChildImageSharpOriginalHeight = 'photo___childImageSharp___original___height',
  PhotoChildImageSharpOriginalSrc = 'photo___childImageSharp___original___src',
  PhotoChildImageSharpResizeSrc = 'photo___childImageSharp___resize___src',
  PhotoChildImageSharpResizeTracedSvg = 'photo___childImageSharp___resize___tracedSVG',
  PhotoChildImageSharpResizeWidth = 'photo___childImageSharp___resize___width',
  PhotoChildImageSharpResizeHeight = 'photo___childImageSharp___resize___height',
  PhotoChildImageSharpResizeAspectRatio = 'photo___childImageSharp___resize___aspectRatio',
  PhotoChildImageSharpResizeOriginalName = 'photo___childImageSharp___resize___originalName',
  PhotoChildImageSharpId = 'photo___childImageSharp___id',
  PhotoChildImageSharpParentId = 'photo___childImageSharp___parent___id',
  PhotoChildImageSharpParentChildren = 'photo___childImageSharp___parent___children',
  PhotoChildImageSharpChildren = 'photo___childImageSharp___children',
  PhotoChildImageSharpChildrenId = 'photo___childImageSharp___children___id',
  PhotoChildImageSharpChildrenChildren = 'photo___childImageSharp___children___children',
  PhotoChildImageSharpInternalContent = 'photo___childImageSharp___internal___content',
  PhotoChildImageSharpInternalContentDigest = 'photo___childImageSharp___internal___contentDigest',
  PhotoChildImageSharpInternalDescription = 'photo___childImageSharp___internal___description',
  PhotoChildImageSharpInternalFieldOwners = 'photo___childImageSharp___internal___fieldOwners',
  PhotoChildImageSharpInternalIgnoreType = 'photo___childImageSharp___internal___ignoreType',
  PhotoChildImageSharpInternalMediaType = 'photo___childImageSharp___internal___mediaType',
  PhotoChildImageSharpInternalOwner = 'photo___childImageSharp___internal___owner',
  PhotoChildImageSharpInternalType = 'photo___childImageSharp___internal___type',
  PhotoChildrenMdx = 'photo___childrenMdx',
  PhotoChildrenMdxRawBody = 'photo___childrenMdx___rawBody',
  PhotoChildrenMdxFileAbsolutePath = 'photo___childrenMdx___fileAbsolutePath',
  PhotoChildrenMdxFrontmatterTitle = 'photo___childrenMdx___frontmatter___title',
  PhotoChildrenMdxFrontmatterLanguage = 'photo___childrenMdx___frontmatter___language',
  PhotoChildrenMdxFrontmatterId = 'photo___childrenMdx___frontmatter___id',
  PhotoChildrenMdxFrontmatterType = 'photo___childrenMdx___frontmatter___type',
  PhotoChildrenMdxFrontmatterSlug = 'photo___childrenMdx___frontmatter___slug',
  PhotoChildrenMdxSlug = 'photo___childrenMdx___slug',
  PhotoChildrenMdxBody = 'photo___childrenMdx___body',
  PhotoChildrenMdxExcerpt = 'photo___childrenMdx___excerpt',
  PhotoChildrenMdxHeadings = 'photo___childrenMdx___headings',
  PhotoChildrenMdxHeadingsValue = 'photo___childrenMdx___headings___value',
  PhotoChildrenMdxHeadingsDepth = 'photo___childrenMdx___headings___depth',
  PhotoChildrenMdxHtml = 'photo___childrenMdx___html',
  PhotoChildrenMdxMdxAst = 'photo___childrenMdx___mdxAST',
  PhotoChildrenMdxTableOfContents = 'photo___childrenMdx___tableOfContents',
  PhotoChildrenMdxTimeToRead = 'photo___childrenMdx___timeToRead',
  PhotoChildrenMdxWordCountParagraphs = 'photo___childrenMdx___wordCount___paragraphs',
  PhotoChildrenMdxWordCountSentences = 'photo___childrenMdx___wordCount___sentences',
  PhotoChildrenMdxWordCountWords = 'photo___childrenMdx___wordCount___words',
  PhotoChildrenMdxId = 'photo___childrenMdx___id',
  PhotoChildrenMdxParentId = 'photo___childrenMdx___parent___id',
  PhotoChildrenMdxParentChildren = 'photo___childrenMdx___parent___children',
  PhotoChildrenMdxChildren = 'photo___childrenMdx___children',
  PhotoChildrenMdxChildrenId = 'photo___childrenMdx___children___id',
  PhotoChildrenMdxChildrenChildren = 'photo___childrenMdx___children___children',
  PhotoChildrenMdxInternalContent = 'photo___childrenMdx___internal___content',
  PhotoChildrenMdxInternalContentDigest = 'photo___childrenMdx___internal___contentDigest',
  PhotoChildrenMdxInternalDescription = 'photo___childrenMdx___internal___description',
  PhotoChildrenMdxInternalFieldOwners = 'photo___childrenMdx___internal___fieldOwners',
  PhotoChildrenMdxInternalIgnoreType = 'photo___childrenMdx___internal___ignoreType',
  PhotoChildrenMdxInternalMediaType = 'photo___childrenMdx___internal___mediaType',
  PhotoChildrenMdxInternalOwner = 'photo___childrenMdx___internal___owner',
  PhotoChildrenMdxInternalType = 'photo___childrenMdx___internal___type',
  PhotoChildMdxRawBody = 'photo___childMdx___rawBody',
  PhotoChildMdxFileAbsolutePath = 'photo___childMdx___fileAbsolutePath',
  PhotoChildMdxFrontmatterTitle = 'photo___childMdx___frontmatter___title',
  PhotoChildMdxFrontmatterLanguage = 'photo___childMdx___frontmatter___language',
  PhotoChildMdxFrontmatterId = 'photo___childMdx___frontmatter___id',
  PhotoChildMdxFrontmatterType = 'photo___childMdx___frontmatter___type',
  PhotoChildMdxFrontmatterSlug = 'photo___childMdx___frontmatter___slug',
  PhotoChildMdxSlug = 'photo___childMdx___slug',
  PhotoChildMdxBody = 'photo___childMdx___body',
  PhotoChildMdxExcerpt = 'photo___childMdx___excerpt',
  PhotoChildMdxHeadings = 'photo___childMdx___headings',
  PhotoChildMdxHeadingsValue = 'photo___childMdx___headings___value',
  PhotoChildMdxHeadingsDepth = 'photo___childMdx___headings___depth',
  PhotoChildMdxHtml = 'photo___childMdx___html',
  PhotoChildMdxMdxAst = 'photo___childMdx___mdxAST',
  PhotoChildMdxTableOfContents = 'photo___childMdx___tableOfContents',
  PhotoChildMdxTimeToRead = 'photo___childMdx___timeToRead',
  PhotoChildMdxWordCountParagraphs = 'photo___childMdx___wordCount___paragraphs',
  PhotoChildMdxWordCountSentences = 'photo___childMdx___wordCount___sentences',
  PhotoChildMdxWordCountWords = 'photo___childMdx___wordCount___words',
  PhotoChildMdxId = 'photo___childMdx___id',
  PhotoChildMdxParentId = 'photo___childMdx___parent___id',
  PhotoChildMdxParentChildren = 'photo___childMdx___parent___children',
  PhotoChildMdxChildren = 'photo___childMdx___children',
  PhotoChildMdxChildrenId = 'photo___childMdx___children___id',
  PhotoChildMdxChildrenChildren = 'photo___childMdx___children___children',
  PhotoChildMdxInternalContent = 'photo___childMdx___internal___content',
  PhotoChildMdxInternalContentDigest = 'photo___childMdx___internal___contentDigest',
  PhotoChildMdxInternalDescription = 'photo___childMdx___internal___description',
  PhotoChildMdxInternalFieldOwners = 'photo___childMdx___internal___fieldOwners',
  PhotoChildMdxInternalIgnoreType = 'photo___childMdx___internal___ignoreType',
  PhotoChildMdxInternalMediaType = 'photo___childMdx___internal___mediaType',
  PhotoChildMdxInternalOwner = 'photo___childMdx___internal___owner',
  PhotoChildMdxInternalType = 'photo___childMdx___internal___type',
  PhotoChildrenEmployee = 'photo___childrenEmployee',
  PhotoChildrenEmployeeId = 'photo___childrenEmployee___id',
  PhotoChildrenEmployeeParentId = 'photo___childrenEmployee___parent___id',
  PhotoChildrenEmployeeParentChildren = 'photo___childrenEmployee___parent___children',
  PhotoChildrenEmployeeChildren = 'photo___childrenEmployee___children',
  PhotoChildrenEmployeeChildrenId = 'photo___childrenEmployee___children___id',
  PhotoChildrenEmployeeChildrenChildren = 'photo___childrenEmployee___children___children',
  PhotoChildrenEmployeeInternalContent = 'photo___childrenEmployee___internal___content',
  PhotoChildrenEmployeeInternalContentDigest = 'photo___childrenEmployee___internal___contentDigest',
  PhotoChildrenEmployeeInternalDescription = 'photo___childrenEmployee___internal___description',
  PhotoChildrenEmployeeInternalFieldOwners = 'photo___childrenEmployee___internal___fieldOwners',
  PhotoChildrenEmployeeInternalIgnoreType = 'photo___childrenEmployee___internal___ignoreType',
  PhotoChildrenEmployeeInternalMediaType = 'photo___childrenEmployee___internal___mediaType',
  PhotoChildrenEmployeeInternalOwner = 'photo___childrenEmployee___internal___owner',
  PhotoChildrenEmployeeInternalType = 'photo___childrenEmployee___internal___type',
  PhotoChildrenEmployeeType = 'photo___childrenEmployee___type',
  PhotoChildrenEmployeeName = 'photo___childrenEmployee___name',
  PhotoChildrenEmployeePositionEn = 'photo___childrenEmployee___position___en',
  PhotoChildrenEmployeePositionNb = 'photo___childrenEmployee___position___nb',
  PhotoChildrenEmployeeEmail = 'photo___childrenEmployee___email',
  PhotoChildrenEmployeePhoneNumber = 'photo___childrenEmployee___phoneNumber',
  PhotoChildrenEmployeePhotoSourceInstanceName = 'photo___childrenEmployee___photo___sourceInstanceName',
  PhotoChildrenEmployeePhotoAbsolutePath = 'photo___childrenEmployee___photo___absolutePath',
  PhotoChildrenEmployeePhotoRelativePath = 'photo___childrenEmployee___photo___relativePath',
  PhotoChildrenEmployeePhotoExtension = 'photo___childrenEmployee___photo___extension',
  PhotoChildrenEmployeePhotoSize = 'photo___childrenEmployee___photo___size',
  PhotoChildrenEmployeePhotoPrettySize = 'photo___childrenEmployee___photo___prettySize',
  PhotoChildrenEmployeePhotoModifiedTime = 'photo___childrenEmployee___photo___modifiedTime',
  PhotoChildrenEmployeePhotoAccessTime = 'photo___childrenEmployee___photo___accessTime',
  PhotoChildrenEmployeePhotoChangeTime = 'photo___childrenEmployee___photo___changeTime',
  PhotoChildrenEmployeePhotoBirthTime = 'photo___childrenEmployee___photo___birthTime',
  PhotoChildrenEmployeePhotoRoot = 'photo___childrenEmployee___photo___root',
  PhotoChildrenEmployeePhotoDir = 'photo___childrenEmployee___photo___dir',
  PhotoChildrenEmployeePhotoBase = 'photo___childrenEmployee___photo___base',
  PhotoChildrenEmployeePhotoExt = 'photo___childrenEmployee___photo___ext',
  PhotoChildrenEmployeePhotoName = 'photo___childrenEmployee___photo___name',
  PhotoChildrenEmployeePhotoRelativeDirectory = 'photo___childrenEmployee___photo___relativeDirectory',
  PhotoChildrenEmployeePhotoDev = 'photo___childrenEmployee___photo___dev',
  PhotoChildrenEmployeePhotoMode = 'photo___childrenEmployee___photo___mode',
  PhotoChildrenEmployeePhotoNlink = 'photo___childrenEmployee___photo___nlink',
  PhotoChildrenEmployeePhotoUid = 'photo___childrenEmployee___photo___uid',
  PhotoChildrenEmployeePhotoGid = 'photo___childrenEmployee___photo___gid',
  PhotoChildrenEmployeePhotoRdev = 'photo___childrenEmployee___photo___rdev',
  PhotoChildrenEmployeePhotoIno = 'photo___childrenEmployee___photo___ino',
  PhotoChildrenEmployeePhotoAtimeMs = 'photo___childrenEmployee___photo___atimeMs',
  PhotoChildrenEmployeePhotoMtimeMs = 'photo___childrenEmployee___photo___mtimeMs',
  PhotoChildrenEmployeePhotoCtimeMs = 'photo___childrenEmployee___photo___ctimeMs',
  PhotoChildrenEmployeePhotoAtime = 'photo___childrenEmployee___photo___atime',
  PhotoChildrenEmployeePhotoMtime = 'photo___childrenEmployee___photo___mtime',
  PhotoChildrenEmployeePhotoCtime = 'photo___childrenEmployee___photo___ctime',
  PhotoChildrenEmployeePhotoBirthtime = 'photo___childrenEmployee___photo___birthtime',
  PhotoChildrenEmployeePhotoBirthtimeMs = 'photo___childrenEmployee___photo___birthtimeMs',
  PhotoChildrenEmployeePhotoBlksize = 'photo___childrenEmployee___photo___blksize',
  PhotoChildrenEmployeePhotoBlocks = 'photo___childrenEmployee___photo___blocks',
  PhotoChildrenEmployeePhotoPublicUrl = 'photo___childrenEmployee___photo___publicURL',
  PhotoChildrenEmployeePhotoChildrenImageSharp = 'photo___childrenEmployee___photo___childrenImageSharp',
  PhotoChildrenEmployeePhotoChildrenMdx = 'photo___childrenEmployee___photo___childrenMdx',
  PhotoChildrenEmployeePhotoChildrenEmployee = 'photo___childrenEmployee___photo___childrenEmployee',
  PhotoChildrenEmployeePhotoId = 'photo___childrenEmployee___photo___id',
  PhotoChildrenEmployeePhotoChildren = 'photo___childrenEmployee___photo___children',
  PhotoChildEmployeeId = 'photo___childEmployee___id',
  PhotoChildEmployeeParentId = 'photo___childEmployee___parent___id',
  PhotoChildEmployeeParentChildren = 'photo___childEmployee___parent___children',
  PhotoChildEmployeeChildren = 'photo___childEmployee___children',
  PhotoChildEmployeeChildrenId = 'photo___childEmployee___children___id',
  PhotoChildEmployeeChildrenChildren = 'photo___childEmployee___children___children',
  PhotoChildEmployeeInternalContent = 'photo___childEmployee___internal___content',
  PhotoChildEmployeeInternalContentDigest = 'photo___childEmployee___internal___contentDigest',
  PhotoChildEmployeeInternalDescription = 'photo___childEmployee___internal___description',
  PhotoChildEmployeeInternalFieldOwners = 'photo___childEmployee___internal___fieldOwners',
  PhotoChildEmployeeInternalIgnoreType = 'photo___childEmployee___internal___ignoreType',
  PhotoChildEmployeeInternalMediaType = 'photo___childEmployee___internal___mediaType',
  PhotoChildEmployeeInternalOwner = 'photo___childEmployee___internal___owner',
  PhotoChildEmployeeInternalType = 'photo___childEmployee___internal___type',
  PhotoChildEmployeeType = 'photo___childEmployee___type',
  PhotoChildEmployeeName = 'photo___childEmployee___name',
  PhotoChildEmployeePositionEn = 'photo___childEmployee___position___en',
  PhotoChildEmployeePositionNb = 'photo___childEmployee___position___nb',
  PhotoChildEmployeeEmail = 'photo___childEmployee___email',
  PhotoChildEmployeePhoneNumber = 'photo___childEmployee___phoneNumber',
  PhotoChildEmployeePhotoSourceInstanceName = 'photo___childEmployee___photo___sourceInstanceName',
  PhotoChildEmployeePhotoAbsolutePath = 'photo___childEmployee___photo___absolutePath',
  PhotoChildEmployeePhotoRelativePath = 'photo___childEmployee___photo___relativePath',
  PhotoChildEmployeePhotoExtension = 'photo___childEmployee___photo___extension',
  PhotoChildEmployeePhotoSize = 'photo___childEmployee___photo___size',
  PhotoChildEmployeePhotoPrettySize = 'photo___childEmployee___photo___prettySize',
  PhotoChildEmployeePhotoModifiedTime = 'photo___childEmployee___photo___modifiedTime',
  PhotoChildEmployeePhotoAccessTime = 'photo___childEmployee___photo___accessTime',
  PhotoChildEmployeePhotoChangeTime = 'photo___childEmployee___photo___changeTime',
  PhotoChildEmployeePhotoBirthTime = 'photo___childEmployee___photo___birthTime',
  PhotoChildEmployeePhotoRoot = 'photo___childEmployee___photo___root',
  PhotoChildEmployeePhotoDir = 'photo___childEmployee___photo___dir',
  PhotoChildEmployeePhotoBase = 'photo___childEmployee___photo___base',
  PhotoChildEmployeePhotoExt = 'photo___childEmployee___photo___ext',
  PhotoChildEmployeePhotoName = 'photo___childEmployee___photo___name',
  PhotoChildEmployeePhotoRelativeDirectory = 'photo___childEmployee___photo___relativeDirectory',
  PhotoChildEmployeePhotoDev = 'photo___childEmployee___photo___dev',
  PhotoChildEmployeePhotoMode = 'photo___childEmployee___photo___mode',
  PhotoChildEmployeePhotoNlink = 'photo___childEmployee___photo___nlink',
  PhotoChildEmployeePhotoUid = 'photo___childEmployee___photo___uid',
  PhotoChildEmployeePhotoGid = 'photo___childEmployee___photo___gid',
  PhotoChildEmployeePhotoRdev = 'photo___childEmployee___photo___rdev',
  PhotoChildEmployeePhotoIno = 'photo___childEmployee___photo___ino',
  PhotoChildEmployeePhotoAtimeMs = 'photo___childEmployee___photo___atimeMs',
  PhotoChildEmployeePhotoMtimeMs = 'photo___childEmployee___photo___mtimeMs',
  PhotoChildEmployeePhotoCtimeMs = 'photo___childEmployee___photo___ctimeMs',
  PhotoChildEmployeePhotoAtime = 'photo___childEmployee___photo___atime',
  PhotoChildEmployeePhotoMtime = 'photo___childEmployee___photo___mtime',
  PhotoChildEmployeePhotoCtime = 'photo___childEmployee___photo___ctime',
  PhotoChildEmployeePhotoBirthtime = 'photo___childEmployee___photo___birthtime',
  PhotoChildEmployeePhotoBirthtimeMs = 'photo___childEmployee___photo___birthtimeMs',
  PhotoChildEmployeePhotoBlksize = 'photo___childEmployee___photo___blksize',
  PhotoChildEmployeePhotoBlocks = 'photo___childEmployee___photo___blocks',
  PhotoChildEmployeePhotoPublicUrl = 'photo___childEmployee___photo___publicURL',
  PhotoChildEmployeePhotoChildrenImageSharp = 'photo___childEmployee___photo___childrenImageSharp',
  PhotoChildEmployeePhotoChildrenMdx = 'photo___childEmployee___photo___childrenMdx',
  PhotoChildEmployeePhotoChildrenEmployee = 'photo___childEmployee___photo___childrenEmployee',
  PhotoChildEmployeePhotoId = 'photo___childEmployee___photo___id',
  PhotoChildEmployeePhotoChildren = 'photo___childEmployee___photo___children',
  PhotoId = 'photo___id',
  PhotoParentId = 'photo___parent___id',
  PhotoParentParentId = 'photo___parent___parent___id',
  PhotoParentParentChildren = 'photo___parent___parent___children',
  PhotoParentChildren = 'photo___parent___children',
  PhotoParentChildrenId = 'photo___parent___children___id',
  PhotoParentChildrenChildren = 'photo___parent___children___children',
  PhotoParentInternalContent = 'photo___parent___internal___content',
  PhotoParentInternalContentDigest = 'photo___parent___internal___contentDigest',
  PhotoParentInternalDescription = 'photo___parent___internal___description',
  PhotoParentInternalFieldOwners = 'photo___parent___internal___fieldOwners',
  PhotoParentInternalIgnoreType = 'photo___parent___internal___ignoreType',
  PhotoParentInternalMediaType = 'photo___parent___internal___mediaType',
  PhotoParentInternalOwner = 'photo___parent___internal___owner',
  PhotoParentInternalType = 'photo___parent___internal___type',
  PhotoChildren = 'photo___children',
  PhotoChildrenId = 'photo___children___id',
  PhotoChildrenParentId = 'photo___children___parent___id',
  PhotoChildrenParentChildren = 'photo___children___parent___children',
  PhotoChildrenChildren = 'photo___children___children',
  PhotoChildrenChildrenId = 'photo___children___children___id',
  PhotoChildrenChildrenChildren = 'photo___children___children___children',
  PhotoChildrenInternalContent = 'photo___children___internal___content',
  PhotoChildrenInternalContentDigest = 'photo___children___internal___contentDigest',
  PhotoChildrenInternalDescription = 'photo___children___internal___description',
  PhotoChildrenInternalFieldOwners = 'photo___children___internal___fieldOwners',
  PhotoChildrenInternalIgnoreType = 'photo___children___internal___ignoreType',
  PhotoChildrenInternalMediaType = 'photo___children___internal___mediaType',
  PhotoChildrenInternalOwner = 'photo___children___internal___owner',
  PhotoChildrenInternalType = 'photo___children___internal___type',
  PhotoInternalContent = 'photo___internal___content',
  PhotoInternalContentDigest = 'photo___internal___contentDigest',
  PhotoInternalDescription = 'photo___internal___description',
  PhotoInternalFieldOwners = 'photo___internal___fieldOwners',
  PhotoInternalIgnoreType = 'photo___internal___ignoreType',
  PhotoInternalMediaType = 'photo___internal___mediaType',
  PhotoInternalOwner = 'photo___internal___owner',
  PhotoInternalType = 'photo___internal___type',
}

export type EmployeeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  position?: Maybe<EmployeePositionFilterInput>;
  email?: Maybe<StringQueryOperatorInput>;
  phoneNumber?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<FileFilterInput>;
};

export type EmployeeFilterListInput = {
  elemMatch?: Maybe<EmployeeFilterInput>;
};

export type EmployeeGroupConnection = {
  __typename?: 'employeeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<EmployeeEdge>;
  nodes: Array<Employee>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type EmployeePosition = {
  __typename?: 'employeePosition';
  en?: Maybe<Scalars['String']>;
  nb?: Maybe<Scalars['String']>;
};

export type EmployeePositionFilterInput = {
  en?: Maybe<StringQueryOperatorInput>;
  nb?: Maybe<StringQueryOperatorInput>;
};

export type EmployeeSortInput = {
  fields?: Maybe<Array<Maybe<EmployeeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ProjectSlugsQueryVariables = Exact<{ [key: string]: never }>;

export type ProjectSlugsQuery = { __typename?: 'Query' } & {
  allMdx: { __typename?: 'MdxConnection' } & {
    nodes: Array<
      { __typename?: 'Mdx' } & {
        frontmatter?: Maybe<
          { __typename?: 'MdxFrontmatter' } & Pick<
            MdxFrontmatter,
            'language' | 'slug'
          >
        >;
      }
    >;
  };
};

export type EmployeeListFragment = { __typename?: 'employee' } & Pick<
  Employee,
  'name' | 'email' | 'phoneNumber'
> & {
    position?: Maybe<
      { __typename?: 'employeePosition' } & Pick<EmployeePosition, 'nb' | 'en'>
    >;
    photo?: Maybe<
      { __typename?: 'File' } & {
        childImageSharp?: Maybe<
          { __typename?: 'ImageSharp' } & Pick<ImageSharp, 'gatsbyImageData'>
        >;
      }
    >;
  };

export type HeroFragment = { __typename?: 'File' } & {
  childImageSharp?: Maybe<
    { __typename?: 'ImageSharp' } & Pick<ImageSharp, 'gatsbyImageData'>
  >;
};

export type ProjectBoxFragment = { __typename?: 'MdxFrontmatter' } & Pick<
  MdxFrontmatter,
  'title' | 'slug' | 'language'
> & {
    image?: Maybe<
      { __typename?: 'File' } & {
        childImageSharp?: Maybe<
          { __typename?: 'ImageSharp' } & Pick<ImageSharp, 'gatsbyImageData'>
        >;
      }
    >;
  };

export type SeoQueryVariables = Exact<{ [key: string]: never }>;

export type SeoQuery = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<
        { __typename?: 'SiteSiteMetadata' } & Pick<
          SiteSiteMetadata,
          'titleTemplate' | 'siteUrl'
        > & {
            defaultTitle: SiteSiteMetadata['title'];
            defaultDescription: SiteSiteMetadata['description'];
            defaultImage: SiteSiteMetadata['image'];
          }
      >;
    }
  >;
};

export type ContactPageQueryVariables = Exact<{ [key: string]: never }>;

export type ContactPageQuery = { __typename?: 'Query' } & {
  allEmployee: { __typename?: 'employeeConnection' } & {
    nodes: Array<{ __typename?: 'employee' } & EmployeeListFragment>;
  };
};

export type HomePageQueryVariables = Exact<{ [key: string]: never }>;

export type HomePageQuery = { __typename?: 'Query' } & {
  allMdx: { __typename?: 'MdxConnection' } & {
    nodes: Array<
      { __typename?: 'Mdx' } & {
        frontmatter?: Maybe<
          { __typename?: 'MdxFrontmatter' } & ProjectBoxFragment
        >;
      }
    >;
  };
  skillImage?: Maybe<{ __typename?: 'File' } & HeroFragment>;
};

export type ProjectQueryVariables = Exact<{
  slug: Scalars['String'];
  lang: Scalars['String'];
}>;

export type ProjectQuery = { __typename?: 'Query' } & {
  project?: Maybe<
    { __typename?: 'Mdx' } & Pick<Mdx, 'id' | 'body'> & {
        frontmatter?: Maybe<
          { __typename?: 'MdxFrontmatter' } & Pick<MdxFrontmatter, 'title'> & {
              image?: Maybe<
                { __typename?: 'File' } & {
                  childImageSharp?: Maybe<
                    { __typename?: 'ImageSharp' } & Pick<
                      ImageSharp,
                      'gatsbyImageData'
                    >
                  >;
                }
              >;
            }
        >;
      }
  >;
};
