import React from 'react';

export interface ImageType {
  dataURL?: string;
  file?: File;
  [key: string]: File|string|undefined;
}

export type ImageListType = Array<ImageType>;

export interface ImageUploadingPropsType {
  value: ImageListType;
  onChange: (value: ImageListType, addUpdatedIndex?: Array<number>) => void;
  children?: (props: ExportInterface) => React.ReactNode;
  multiple?: boolean;
  maxNumber?: number;
  acceptType?: Array<string>;
  maxFileSize?: number;
  resolutionWidth?: number;
  resolutionHeight?: number;
  resolutionType?: ResolutionType;
  onError?: (errors: ErrorsType, files?: ImageListType) => void;
  dataURLKey?: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  allowNonImageType?: boolean;
}

export interface ExportInterface {
  imageList: ImageListType;
  onImageUpload: () => void;
  onImageRemoveAll: () => void;
  errors: ErrorsType;
  onImageUpdate: (index: number) => void;
  onImageRemove: (index: number) => void;
  isDragging: boolean;
  dragProps: {
    onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  };
}

export type ErrorsType = {
  maxFileSize?: boolean;
  maxNumber?: boolean;
  acceptType?: boolean;
  resolution?: boolean;
} | null;

export type ResolutionType = 'absolute' | 'less' | 'more' | 'ratio';

export interface ErrorValidation{
    fileList:ImageListType,
    value:ImageListType,
    maxNumber:number,
    keyUpdate:number,
    acceptType:string[] | undefined,
    maxFileSize:number | undefined,
    resolutionType:ResolutionType | undefined,
    resolutionWidth:number | undefined,
    resolutionHeight:number | undefined,
    allowNonImageType:boolean,
}