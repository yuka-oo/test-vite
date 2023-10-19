import skyboxImage from '/public/assets/images/limpopo_golf_course_jpg.jpg'
import environmentImage from '/public/assets/images/lighting_img(230).jpg'

export { Page }

function Page() {
  return (
    <>
      <h1>パネル</h1>
      <model-viewer
          ar
          ar-modes="scene-viewer quick-look"
          skybox-image={skyboxImage}
          environment-image={environmentImage}
          src="/public/assets/models/ar_sample_new.glb"
          alt="torii"
          camera-controls
          camera-orbit = "45deg 90deg 100%"
        >
        </model-viewer>
    </>
  )
}