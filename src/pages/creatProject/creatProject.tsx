import HrApp from "@/components/UI/hr/hr";
import style from "./creatProject.module.scss";
import  ReactImageUploading  from "./imageUpload/imageUploadProject";
import  type {ErrorsType,ImageListType}  from "./imageUpload/imageUploadProject";

import React from "react";

interface FormFields extends HTMLFormControlsCollection {

}
interface FormElements extends HTMLFormElement {
	readonly elements: FormFields;
}

export const CreatProject = () => {
    const [images, setImages] = React.useState<ImageListType>([]);
    const maxNumber = 69;
  
    const onChange = (imageList:ImageListType) => {
      // data for submit
      console.log('Images', imageList);
      setImages(imageList);
    };
  
    const onError = (errors:ErrorsType, files?:ImageListType) => {
      console.log('Error', errors, files);
    };

	return (
		<div>
			<h1 className={style.headingText}>Добавление работы</h1>

			<HrApp className={style.hrColor} />

			<form className={style.formProject} onSubmit={(eventForum:React.FormEvent<FormElements>)=>{
                eventForum.preventDefault()
               // const { elements } = eventForum.currentTarget;
                }}>

                <ReactImageUploading
        multiple
        value={images}
        onChange={onChange}
        onError={onError}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
          errors,
        }) => (
          // write your own UI
          <div className="upload__image-wrapper" 
          {...dragProps}
          >
            <button
              type="button"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button type="button" onClick={onImageRemoveAll}>
              Remove all images
            </button>
            {imageList.map((image, index) => (
              <div key={`image-${index}`} className="image-item">
                <img src={image.data_url?.toString()} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button type="button" onClick={() => onImageUpdate(index)}>
                    Update
                  </button>
                  <button type="button" onClick={() => onImageRemove(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            {errors && (
              <div>
                {errors.maxNumber && (
                  <span>Number of selected images exceed maxNumber</span>
                )}
                {errors.acceptType && (
                  <span>Your selected file type is not allow</span>
                )}
                {errors.maxFileSize && (
                  <span>Selected file size exceed maxFileSize</span>
                )}
                {errors.resolution && (
                  <span>
                    Selected file is not match your desired resolution
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      
      </ReactImageUploading>

			</form>
		</div>
	);
};
