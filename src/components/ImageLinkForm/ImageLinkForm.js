import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm= ({onInputChange, onPhotoSubmit}) =>{
	return(
		<div>
			<h2 className="f3">
				{'This will detect faces in your images. Give it a try.'}
			</h2>
			<div className="center">
			  <div className="form center pa3 br3 shadow-4">
				<input className="f4 pa2 w-70 center" type="text" placeholder="Enter Image URL"
				onChange={onInputChange}/>
				<button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" style={{
				    border:"1px solid purple"}} onClick={onPhotoSubmit}>Detect</button>
			  </div>
			</div>
		</div>
	);
}

export default ImageLinkForm;