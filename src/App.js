import { useState, useEffect } from 'react'
import logo from './logo.svg';
import GenMountain from './img/GenMountain.jpg'
import './App.css';
//import code from './code.json'
import SpaceMountain from './SpaceMountain.png'

import CodeBlock from './CodeBlock'
import Image from './Image'

const code = [
  {
    "name": "spaceMountain",
    "code": "import matplotlib.pyplot as plt\nfrom mpl_toolkits.mplot3d import Axes3D\nimport numpy as np\n\n# Define the objects' coordinates\n\n# Mountain base coordinates\nmountain_coords = (0, 0, 0)\n\n# Astronauts' coordinates\nastronaut_coords = [(40, 200, 4000), (40, 200, 4000), (40, 200, 4000)]\n\n# Land Rover halfway up the mountain\nland_rover_coords = (0, 0, 1609.34)  # Half the height of the mountain in meters\n\n# Create the figure\nfig = plt.figure()\nax = fig.add_subplot(111, projection='3d')\n\n# Draw the mountain as a cone or similar representation\n# For simplicity, using a cone with height 3,218.69 meters and a base radius\nheight = 3218.69\nradius = 1000  # Arbitrary radius value for visualization\nX = np.linspace(-radius, radius, 300)\nY = np.linspace(-radius, radius, 300)\nX, Y = np.meshgrid(X, Y)\nZ = height - np.sqrt(X**2 + Y**2)\n\n# Plot the mountain as a surface\nax.plot_surface(X, Y, Z, color='brown', alpha=0.5)\n\n# Plot the astronauts\nfor coord in astronaut_coords:\n    ax.scatter(coord[0], coord[1], coord[2], color='blue', s=100, label='Astronaut')\n    \n# Plot the land rover\nax.scatter(land_rover_coords[0], land_rover_coords[1], land_rover_coords[2], color='red', s=200, label='Land Rover')\n\n# Labels\nax.set_xlabel('X Coordinate (meters)')\nax.set_ylabel('Y Coordinate (meters)')\nax.set_zlabel('Z Coordinate (meters)')\nax.set_title('3D Visualization of Mountain, Astronauts, and Land Rover')\n\n# Add legend\nhandles, labels = ax.get_legend_handles_labels()\nby_label = dict(zip(labels, handles))\nax.legend(by_label.values(), by_label.keys())\n\n# Set limits to provide a clear view\nax.set_xlim([-2000, 2000])\nax.set_ylim([-2000, 2000])\nax.set_zlim([0, 4500])\n\nplt.show()"  }
]


function App() {
  const [coded, setCoded] = useState('')
  const [e, setE] = useState(0)
  useEffect(() => {
    const { code: mpl } = code[0]
    let i = mpl.substring(coded.length + 1, mpl.length).indexOf('\n');
    let flip = false;
    const interval = setInterval(() => {
      //i = i % 2 ? i + 1 : i + 10
      i = Math.random() > 0.45 ? i + 1 : mpl.substring(coded.length + 1, mpl.length).indexOf('\n') + i
      setCoded(mpl.substring(0, i))
      
    }, 100) 
    let j = 0
    const ev = setInterval(() => {
      j++
      if (j > 2) j = 0 
      setE(j)
    }, ((Math.random() * 1000) + 500) | 0)
    return () => {
      clearInterval(interval)
      clearInterval(ev)
    }
  }, [])
  console.log({ e })
  return (
    <div className="App">
      <header className="App-header" >
        <nav
          style={{
            backgroundColor: 'rgba(100, 100, 100, 0.3)',
            height: '100px',
            width: '100vw',
            display: 'flex',
            justifyContent: 'flex-start',
            position: 'fixed',
            top: '0px',
            left: '0px' }}>
            <div><span>doneplay{e === 0 && '' || e === 1 && 's' || e === 2 && 'ed'}</span><span>.com</span></div>
        </nav>
      </header>
      <article className="App-body" style={{ marginTop: '100px' }}>
        <CodeBlock typeFunction={(i, code) => i + 1 } code={'astronaut looking at a mountain'} />
        <Image src={GenMountain} alt={'sample render'} AnimationDelay={500} />
        <CodeBlock code={code[0].code} />
        <Image src={SpaceMountain} AnimationDelay={5000} alt="sample text render from code" />
      </article>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
