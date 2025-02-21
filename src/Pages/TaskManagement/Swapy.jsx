import { createSwapy } from 'swapy'
import { useEffect, useRef } from 'react'

const Swapy = () => {
  const swapy = useRef(null)
  const container = useRef(null)

  useEffect(() => {
    // If container element is loaded
    if (container.current) {
      swapy.current = createSwapy(container.current)

      // Your event listeners
      swapy.current.onSwap((event) => {
        console.log('swap', event);
      })
    }

    return () => {
      // Destroy the swapy instance on component destroy
      swapy.current?.destroy()
    }
  }, [])

  return (
    <div ref={container} className='flex justify-between gap-4'>

      <div data-swapy-slot="ToDo">
        <div data-swapy-item="ToDo">
          <div><h1 className='bg-black text-white p-5'>A Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore labore esse expedita magni libero ratione architecto ab tempora laudantium optio deleniti, id molestias totam! Ipsa, earum molestiae. Itaque, quia.</h1></div>
        </div>
      </div>

      <div data-swapy-slot="In Progress">
        <div data-swapy-item="In Progress">
          <div>
                    <h1 className='bg-black text-white p-5'> B Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore labore esse expedita magni libero ratione architecto ab tempora laudantium optio deleniti, id molestias totam! Ipsa, earum molestiae. Itaque, quia.</h1>
          </div>
        </div>
      </div>

      <div data-swapy-slot="Done">
        <div data-swapy-item="Done">
          <div>
                    <h1 className='bg-black text-white p-5'> C Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore labore esse expedita magni libero ratione architecto ab tempora laudantium optio deleniti, id molestias totam! Ipsa, earum molestiae. Itaque, quia.</h1>
          </div>
        </div>
      </div>

    </div>
  )
}

export default  Swapy;