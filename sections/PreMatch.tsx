import AddButton from "@/components/AddButton"
import CheckBox from "@/components/CheckBox"
import DropDown from "@/components/DropDown"
import NumberInput from "@/components/NumberInput"
import TextInput from "@/components/TextInput"
import NumberButton from "@/components/NumberButton"

interface PreMatchProps {}

const PreMatch = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center mt-16 mb-12 px-4">
      
      <h2 className="text-4xl font-semibold mb-8">
        Pregame
      </h2>

      <div className="w-full max-w-6xl space-y-8">

        {/* Row 1 — 3 items */}
        <div className="flex gap-6">
          <div className="flex-1 min-w-0">
            <TextInput
              title="Initials"
              id="initials"
              className="w-full"
              maxLength={2}
              rows={1}
              validChars={/[A-Za-z]/}
            />
          </div>

          <div className="flex-1 min-w-0">
            <DropDown
              title="Event"
              id="event"
              options={[
                "Training",
                "Hatboro-Horsham",
                "Mount Olive",
                "Seneca",
                "Allentown",
                "SCH",
                "Montgomery",
                "Bensalem",
                "Warren Hills",
                "DCMP",
                "Worlds",
              ]}
              className="w-full"
            />
          </div>

          <div className="flex-1 min-w-0">
            <NumberInput
              title="Match Number"
              id="match_number"
              className="w-full"
              min={1}
              max={1000}
            />
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex-1 min-w-0">
            <DropDown
              title="Starting Position"
              id="starting_position"
              options={["Near", "Middle", "Far"]}
              className="w-full"
            />
          </div>

          <div className="flex-1 min-w-0">
            <NumberInput
              title="Team Number"
              id="team_number"
              className="w-full"
              min={1}
              max={100000}
            />
          </div>
        </div>
<div className="flex flex-col">
  <div className="flex text-2xl font-medium pb-2 justify-center flex">
    Preload
  </div>
        <div className="flex items-center justify-center">

            <NumberButton
              title=""
              id="preload"
              className="border-purple-500 bg-purple-500"
              min={0}
              max={1000}
            />
            <AddButton
              title="+"
              id="preload"
              addValue={8}
              className="w-50 border-purple-500 bg-purple-500"
              max={1000}
            />

        </div>
        </div>

      </div>
    </section>
  )
}

export default PreMatch