import AddButton from "@/components/AddButton"
import CheckBox from "@/components/CheckBox"
import NumberButton from "@/components/NumberButton"

interface autoProps {}

// Autonomous section of the app
const Auto = ({}: autoProps): JSX.Element => {
  return (
    <>

 <section className="w-full flex flex-col items-center mt-16  px-4">
   <div className="flex flex-col items-center w-full max-w-[1200px] mx-auto px-4 justify-center">
      <div className="flex items-center mt-16 mb-4 text-5xl font-semibold">
        Autonomous
      </div>

      <div className="flex flex-col justify-center items-center gap-3 border-5 border-white">

      <div className="flex flex-col items-center justify-center 
      pt-4 pb-4 gap-4 mx-auto border-0 border-gray-600">

        <div className="border-2 bg-gray-600">
        <div className="flex text-3xl font-medium pb-2 justify-center flex">
          Fuel
        </div>
        <div className="text-3xl font-medium justify-center mb-3 flex gap-4">
              <AddButton
              title="+"
              id="auto_fuel"
              addValue={5}
              className="w-50 border-green-500 bg-green-500"
              max={1000}
            />
            <AddButton
              title="+"
              id="auto_fuel"
              addValue={10}
              className="w-50 border-green-500 bg-green-500"
              max={1000}
            />
            </div>
          <NumberButton
            id="auto_fuel"
            title=""
            className="border-green-500 bg-green-500"
            min={0}
            max={500}
          />
          <div className="text-3xl font-medium justify-center mt-4 flex gap-4">
          <AddButton
              title=""
              id="auto_fuel"
              addValue={-5}
              className="w-50 border-green-500 bg-green-500"
              max={1000}
              min={0}
            />
            <AddButton
              title=""
              id="auto_fuel"
              addValue={-10}
              className="w-50 border-green-500 bg-green-500"
              max={1000}
              min={0}
            />
            </div>

             <div className="flex flex-col items-center justify-center 
      pt-4 pb-4 gap-4 mx-transition border-0 border-gray-600">

        <div className="flex text-3xl font-medium pb-2 justify-end flex">
          Misses
        </div>
        <div className="text-3xl font-medium justify-end flex gap-4">
              <AddButton
              title="+"
              id="auto_miss"
              addValue={5}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
            />
            <AddButton
              title="+"
              id="auto_miss"
              addValue={10}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
            />
            </div>
          <NumberButton
            id="auto_miss"
            title=""
            className="border-purple-500 bg-purple-500"
            min={0}
            max={500}
          />
          <div className="text-3xl font-medium justify-end flex gap-4">
          <AddButton
              title=""
              id="auto_miss"
              addValue={-5}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
              min={0}
            />
            <AddButton
              title=""
              id="auto_miss"
              addValue={-10}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
              min={0}
            />
            </div>
</div> </div> </div>


      </div>

            <div className="mt-4 flex flex-col w-min mx-auto border-2 border-gray-600 margin-top-10">
        <CheckBox title="Climb?" id="auto_climb" />
      </div>
      </div>
      </section>
    </>
  )
}

export default Auto
