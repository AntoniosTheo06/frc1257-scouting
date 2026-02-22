import AddButton from "@/components/AddButton"
import CheckBox from "@/components/CheckBox"
import NumberButton from "@/components/NumberButton"
import Vertical from "@/components/Vertical"

interface teleOpProps {}

// Autonomous section of the app
const TeleOp = ({}: teleOpProps): JSX.Element => {
  return (
    <>

 <section className="w-full flex flex-col items-center mb-12 px-4">
   <div className="flex flex-col items-center w-full max-w-[1200px] mx-auto px-4 justify-center">
      <div className="flex items-center mt-16 mb-4 text-5xl font-semibold">
        Teleoperated
      </div>

      <div className="flex flex-col justify-center items-center gap-3 border-5 border-white">
<div className="flex flex-col ">
      <div className="flex flex-col items-center justify-center 
      pt-4 pb-4 gap-4 mx-auto border-0 border-gray-600">

<div className="flex text-3xl font-medium pb-2 justify-end flex">
          Active 1
        </div>

        <div className="border-2 bg-gray-600">

        <div className="flex text-3xl font-medium pb-2 justify-center flex">
          Fuel
        </div>

        <div className="text-3xl mb-4 font-medium justify-center flex gap-4">
              <AddButton
              title="+"
              id="active1_fuel"
              addValue={10}
              className="w-50 border-green-500 bg-green-500"
              max={1000}
            />
            <AddButton
              title="+"
              id="active1_fuel"
              addValue={5}
              className="w-50 border-green-500 bg-green-500"
              max={1000}
            />
            </div>
          <NumberButton
            id="active1_fuel"
            title=""
            className="border-green-500 bg-green-500"
            min={0}
            max={500}
          />
          <div className="text-3xl mt-5 font-medium justify-center flex gap-4">
          <AddButton
              title=""
              id="active1_fuel"
              addValue={-5}
              className="w-50 border-green-500 bg-green-500"
              max={1000}
              min={0}
            />
            <AddButton
              title=""
              id="active1_fuel"
              addValue={-10}
              className="w-50 border-green-500 bg-green-500"
              max={1000}
              min={0}
            />
            </div>


             <div className="flex flex-col items-center justify-center 
      pt-4 pb-4 gap-4 mx-auto border-0 border-gray-600">

        <div className="flex text-3xl font-medium pb-2 justify-end flex">
          Misses
        </div>
        <div className="text-3xl font-medium justify-end flex gap-4">
              <AddButton
              title="+"
              id="active1_miss"
              addValue={10}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
            />
            <AddButton
              title="+"
              id="active1_miss"
              addValue={5}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
            />
            </div>
          <NumberButton
            id="active1_miss"
            title=""
            className="border-purple-500 bg-purple-500"
            min={0}
            max={500}
          />
          <div className="text-3xl font-medium justify-end flex gap-4">
          <AddButton
              title=""
              id="active1_miss"
              addValue={-5}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
              min={0}
            />
            <AddButton
              title=""
              id="active1_miss"
              addValue={-10}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
              min={0}
            />
            </div>
</div>
</div>
</div>



<div className="flex flex-col items-center text-3xl font-medium pb-2 justify-center flex">
          Inactive 1
          </div>

<div className="flex flex-col justify-center items-center px-4 border-2 bg-gray-600 max-w-[300px]">

          <div className="mt-4 flex flex-col w-min  border-0 border-gray-600 margin-top-10 ">
        <CheckBox title="Passing" id="active1_passing" />
      </div>
      <div className="mt-4 flex flex-col w-min  border-0 border-gray-600 margin-top-10">
        <CheckBox title="Human Player" id="active1_human_player" />
      </div>
      <div className="mt-4 flex flex-col w-min border-0 border-gray-600 margin-top-10">
              <CheckBox title="Defense (Neutral Zone)" id="active1_neutral" />
            </div>
            <div className=" mt-4 flex flex-col w-min border-0 border-gray-600 margin-top-10">
        <CheckBox title="Defense (Alliance Zone)" id="active1_alliance" />
      </div>
</div>
</div>

      </div>

      <div className="flex flex-col justify-center items-center gap-3 border-5 border-white">
<div className="flex flex-col ">
      <div className="flex flex-col items-center justify-center 
      pt-4 pb-4 gap-4 mx-auto border-0 border-gray-600">

<div className="flex text-3xl font-medium pb-2 justify-end flex">
          Active 2
        </div>

        <div className="border-2 bg-gray-600">

        <div className="flex text-3xl font-medium pb-2 justify-center flex">
          Fuel
        </div>

        <div className="text-3xl mb-4 font-medium justify-center flex gap-4">
              <AddButton
              title="+"
              id="active2_fuel"
              addValue={10}
              className="w-50 border-green-500 bg-green-500"
              max={1000}
            />
            <AddButton
              title="+"
              id="active2_fuel"
              addValue={5}
              className="w-50 border-green-500 bg-green-500"
              max={1000}
            />
            </div>
          <NumberButton
            id="active2_fuel"
            title=""
            className="border-green-500 bg-green-500"
            min={0}
            max={500}
          />
          <div className="text-3xl mt-5 font-medium justify-center flex gap-4">
          <AddButton
              title=""
              id="active2_fuel"
              addValue={-5}
              className="w-50 border-green-500 bg-green-500"
              max={1000}
              min={0}
            />
            <AddButton
              title=""
              id="active2_fuel"
              addValue={-10}
              className="w-50 border-green-500 bg-green-500"
              max={1000}
              min={0}
            />
            </div>


             <div className="flex flex-col items-center justify-center 
      pt-4 pb-4 gap-4 mx-auto border-0 border-gray-600">

        <div className="flex text-3xl font-medium pb-2 justify-end flex">
          Misses
        </div>
        <div className="text-3xl font-medium justify-end flex gap-4">
              <AddButton
              title="+"
              id="active2_miss"
              addValue={10}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
            />
            <AddButton
              title="+"
              id="active2_miss"
              addValue={5}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
            />
            </div>
          <NumberButton
            id="active2_miss"
            title=""
            className="border-purple-500 bg-purple-500"
            min={0}
            max={500}
          />
          <div className="text-3xl font-medium justify-end flex gap-4">
          <AddButton
              title=""
              id="active2_miss"
              addValue={-5}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
              min={0}
            />
            <AddButton
              title=""
              id="active2_miss"
              addValue={-10}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
              min={0}
            />
            </div>
</div>
</div>
</div>



<div className="flex flex-col items-center text-3xl font-medium pb-2 justify-center flex">
          Inactive 2
          </div>

<div className="flex flex-col justify-center items-center border-2 bg-gray-600 max-w-[300px]">

          <div className="mt-4 flex flex-col w-min  border-0 border-gray-600 margin-top-10 ">
        <CheckBox title="Passing" id="active2_passing" />
      </div>
      <div className="mt-4 flex flex-col w-min  border-0 border-gray-600 margin-top-10">
        <CheckBox title="Human Player" id="active2_human_player" />
      </div>
      <div className="mt-4 flex flex-col w-min border-0 border-gray-600 margin-top-10">
              <CheckBox title="Defense (Neutral Zone)" id="active2_neutral" />
            </div>
            <div className=" mt-4 flex flex-col w-min border-0 border-gray-600 margin-top-10">
        <CheckBox title="Defense (Alliance Zone)" id="active2_alliance" />
      </div>
</div>
</div>

      </div>

      </div>
      </section>
    </>
  )
}

export default TeleOp
