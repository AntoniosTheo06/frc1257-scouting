import { useEffect } from "react";
import CheckBox from "@/components/CheckBox";
import NumberButton from "@/components/NumberButton";
import DropDown from "@/components/DropDown";
import TextInput from "@/components/TextInput";
import { useFormContext, Controller } from "react-hook-form";

const PostGame = (): JSX.Element => {
  const { control, watch, setValue } = useFormContext();
  const isStrategyMember = watch("strategy_member", false); 


  useEffect(() => {
    if (!isStrategyMember) {
      setValue("speed", "N/A");
      setValue("stability", "N/A");
      setValue("intake", "N/A");
      setValue("driver_skill", "N/A");
      setValue("cycle_consistency", "N/A");
      setValue("versatility", "N/A");
      setValue("cycle_speed", "N/A");
    } else {
      setValue("speed", 5);
      setValue("stability", 5);
      setValue("intake", 5);
      setValue("driver_skill", 5);
      setValue("cycle_consistency", 5);
      setValue("versatility", 5);
      setValue("cycle_speed", 5);
    }
  }, [isStrategyMember, setValue]);

  return (
    <>
    <section className="w-full flex flex-col items-center mt-16 mb-12 px-4">
    <div className="max-w-full w-screen inline-block mx-28 justify-center">
      <div className="flex items-center justify-center mt-16 mb-4 text-5xl font-semibold">
        Post Game
      </div>
      {/* Strategy Scouting Section */}
      <div className="flex items-center justify-center mt-16 mb-4 text-4xl font-semibold">
        Behavioral
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <Controller
          name="strategy_member"
          control={control}
          render={({ field }) => (
            <CheckBox title="Strategy Member?" id="strategy_member" {...field} />
          )}
        />
      </div>

      {isStrategyMember && (
        <div className="flex flex-col items-center border-0 border-gray-600 p-4 mt-4">
          <NumberButton
            id="driver_skill"
            title="Driver Skill"
            className="border-purple-500 bg-purple-500"
            min={0}
            max={10}
          />
          <NumberButton
            id="cycle_consistency"
            title="Cycle Consistency"
            className="border-green-500 bg-green-500"
            min={0}
            max={10}
          />
          <NumberButton
            id="speed"
            title="Speed"
            className="border-purple-500 bg-purple-500"
            min={0}
            max={10}
          />
          <NumberButton
            id="cycle_speed"
            title="Cycle Speed"
            className="border-green-500 bg-green-500"
            min={0}
            max={10}
          />
          <NumberButton
            id="intake"
            title="Intake"
            className="border-purple-500 bg-purple-500"
            min={0}
            max={10}
          />
          <NumberButton
            id="stability"
            title="Stability"
            className="border-green-500 bg-green-500"
            min={0}
            max={10}
          />
          <NumberButton
            id="versatility"
            title="Versatility"
            className="border-purple-500 bg-purple-500"
            min={0}
            max={10}
          />
        </div>
      )}

      <div className="flex items-center justify-center mt-16 mb-4 text-4xl font-semibold">
        Notes
      </div>
      <div className="w-full flex justify-center">
  <TextInput
    title="Notes (If you're asking, I made it not accept commas on purpose)"
    id="notes"
    className="w-full max-w-md"
    rows={5}
    validChars={/[a-zA-Z0-9 \./"';:()?!]/}
  />
</div>
      </div>
      </section>
    </>
  );
};

export default PostGame;
