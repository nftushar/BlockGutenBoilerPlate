// import { useEffect } from 'react';
// import { tabController } from '../../Components/utils/functions';
import Settings from './Settings';
import Style from './Style';
// import produce from 'immer';


const Edit = props => {
	const { className, attributes, setAttributes, clientId } = props;
	const { src, height, width } = attributes;

	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} />

		<div className={className} id={`ifm-${clientId}`}>
			<Style attributes={attributes} clientId={clientId} />

			<div>
				<iframe
					id="video-frame"
					width={width}
					height={height}
					src={src}
					//    eslint-disable-next-line react/no-unknown-property
					title="YouTube video player"
					//    frameborder="0"
					allowfullscreen="true"
				></iframe>

				<button onClick="iframefullscreen()">Toggle Fullscreen</button>
			</div>
		</div >
	</>;
};
export default Edit;



// const Edit = props => {
// 	const { className, attributes, setAttributes, clientId, isSelected } = props;

// 	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId

// 	useEffect(() => tabController(), [isSelected]);


// 	return (
// 		<>
// 			{/* <Settings attributes={attributes} setAttributes={setAttributes} updateItem={updateItem}   /> */}

// 			<div className={className} id={`ifmBlockDirectory-${clientId}`}>
// 				<Style attributes={attributes} clientId={clientId} />

// 				<div className={`ifm`}>
// 					<div>
// 						<div>
// 							<iframe
// 								id="video-frame"
// 								width="100%"
// 								height="315"
// 								src={src}
// 								// eslint-disable-next-line react/no-unknown-property
// 								title="YouTube video player"
// 								// frameborder="0"
// 								allowfullscreen="true"
// 							></iframe>

// 							<button onClick="iframefullscreen()">Toggle Fullscreen</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
// export default Edit;
