import CheckBox from "@/components/CheckBox"
import MultipleChoice from "@/components/MultipleChoice"
import { useFormContext } from "react-hook-form"
import AddButton from "@/components/AddButton"
import NumberButton from "@/components/NumberButton"

interface EndGameProps {}

const EndGame = ({}: EndGameProps): JSX.Element => {
  const { register, watch, setValue } = useFormContext();
  return (
    <>
     <section className="w-full flex flex-col items-center mt-16 mb-12 px-4">
    <div className="max-w-full w-screen inline-block mx-28 justify-center">
      <div className="flex items-center justify-center mt-16 mb-4 text-5xl font-semibold">
        End Game
      </div>

<div className="flex flex-col justify-center items-center gap-3 border-5 border-white">

      <div className="flex flex-col items-center justify-center 
      pt-4 pb-4 gap-4 mx-transition border-0 border-gray-600">

<div className="border-2 bg-gray-600">
        <div className="flex text-3xl font-medium pb-2 justify-center flex">
          Fuel
        </div>
        <div className="text-3xl font-medium justify-center mb-3 flex gap-4">
              <AddButton
              title="+"
              id="endgame_fuel"
              addValue={5}
              className="w-50 border-green-500 bg-green-500"
              max={1000}
            />
            <AddButton
              title="+"
              id="endgame_fuel"
              addValue={10}
              className="w-50 border-green-500 bg-green-500"
              max={1000}
            />
            </div>
          <NumberButton
            id="endgame_fuel"
            title=""
            className="border-green-500 bg-green-500"
            min={0}
            max={500}
          />
          <div className="text-3xl font-medium justify-center mt-4 flex gap-4">
          <AddButton
              title=""
              id="endgame_fuel"
              addValue={-5}
              className="w-50 border-green-500 bg-green-500"
              max={1000}
              min={0}
            />
            <AddButton
              title=""
              id="endgame_fuel"
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
              id="endgame_miss"
              addValue={5}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
            />
            <AddButton
              title="+"
              id="endgame_miss"
              addValue={10}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
            />
            </div>
          <NumberButton
            id="endgame_miss"
            title=""
            className="border-purple-500 bg-purple-500"
            min={0}
            max={500}
          />
          <div className="text-3xl font-medium justify-end flex gap-4">
          <AddButton
              title=""
              id="endgame_miss"
              addValue={-5}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
              min={0}
            />
            <AddButton
              title=""
              id="endgame_miss"
              addValue={-10}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
              min={0}
            />
            </div>
</div> </div> </div>

      </div>

      <div className="flex flex-col border-0 border-gray-600 w-96 md:w-1/2 mx-auto mb-0">
        <div className="flex flex-row items-center justify-left gap-4">
          <MultipleChoice
            title="End Position"
            id="end_position"
            options={[
              "None",
              "L1",
              "L2",
              "L3",
            ]}
            className="w-24 md:w-32 lg:w-40 xl:w-64"
          />
          <div className="">
         <CheckBox 
          title="Bump?" 
          id="bump"  
          /> 
          <CheckBox 
          title="Trench?" 
          id="trench"  
          /> 
          <CheckBox 
          title="Malfunction?" 
          id="malfunction"  
          /> 
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default EndGame
