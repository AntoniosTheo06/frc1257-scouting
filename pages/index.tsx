import snailIcon from "@/assets/snail_logo.png"
import AppBar from "@/sections/AppBar"
import Auto from "@/sections/Auto"
import Transition from "@/sections/Transition"
import EndGame from "@/sections/EndGame"
import PostGame from "@/sections/PostGame"
import PreMatch from "@/sections/PreMatch"
import TeleOp from "@/sections/TeleOp"
import Head from "next/head"
import { useEffect, useState } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import QRCode from "react-qr-code"

// This type includes all the fields the form must cover
export type FormValues = {
  team_number: number
  position: string
  starting_position: string
  match_number: number
  preload: number
  initials: string
  event: string

  auto_climb: boolean
  auto_fuel: number
  auto_miss: number
  
  transition_fuel: number
  transition_miss: number

  active1_fuel: number
  active1_miss: number
  active1_passing: boolean
  active1_human_player: boolean
  active1_neutral: boolean
  active1_alliance: boolean

  active2_fuel: number
  active2_miss: number
  active2_passing: boolean
  active2_human_player: boolean
  active2_neutral: boolean
  active2_alliance: boolean

  endgame_fuel: number
  endgame_miss: number
  end_position: string
  malfunction: boolean
  trench: boolean
  bump: boolean

  notes: string
  strategy_member: boolean
  speed: number | string,
  stability: number | string,
  intake: number | string,
  driver_skill: number | string,
  cycle_consistency: number | string,
  versatility: number | string,
  cycle_speed: number | string,
}

// Default values for each field
const initialValues: FormValues = {
  team_number: 0,
  position: "Near",
  starting_position: "Near",
  match_number: 1,
  preload: 0,
  initials: "",
  event: "DCMP",

  auto_climb: false,
  auto_fuel: 0,
  auto_miss: 0,

  transition_fuel: 0,
  transition_miss: 0,

  active1_fuel: 0,
  active1_miss: 0,
  active1_passing: false,
  active1_human_player: false,
  active1_neutral: false,
  active1_alliance: false,

  active2_fuel: 0,
  active2_miss: 0,
  active2_passing: false,
  active2_human_player: false,
  active2_neutral: false,
  active2_alliance: false,

  endgame_fuel: 0,
  endgame_miss: 0,
  end_position: "None",
  malfunction: false,
  trench: false,
  bump: false,

  notes: "",
  strategy_member: false,
  speed: 5,
  stability: 5,
  intake: 5,
  driver_skill: 5,
  cycle_consistency: 5,
  versatility: 5,
  cycle_speed: 5,
}

export default function Home(): JSX.Element {
  // Initialize the form
  const form = useForm<FormValues>({
    defaultValues: initialValues,
  })

  // This function runs when the user presses submit
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Gets current date and time
    let date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    let startingPositionFormat = "near"
    if (data.starting_position === "Middle") startingPositionFormat = "middle"
    if (data.starting_position === "Far") startingPositionFormat = "far"

    let active1_PassingFormat = "FALSE"
    if(data.active1_passing) active1_PassingFormat = "TRUE"

    let active1_HumanPlayerFormat = "FALSE"
    if(data.active1_human_player) active1_HumanPlayerFormat = "TRUE"

    let active1_NeutralFormat = "FALSE"
    if(data.active1_neutral) active1_NeutralFormat = "TRUE"

    let active1_AllianceFormat = "FALSE"
    if(data.active1_alliance) active1_AllianceFormat = "TRUE"

    let active2_PassingFormat = "FALSE"
    if(data.active2_passing) active2_PassingFormat = "TRUE"

    let active2_HumanPlayerFormat = "FALSE"
    if(data.active2_human_player) active2_HumanPlayerFormat = "TRUE"

    let active2_NeutralFormat = "FALSE"
    if(data.active2_neutral) active2_NeutralFormat = "TRUE"

    let active2_AllianceFormat = "FALSE"
    if(data.active2_alliance) active2_AllianceFormat = "TRUE"

    let autoClimbFormat = "FALSE"
    if(data.auto_climb) autoClimbFormat = "TRUE"

    let endPositionFormat = "none"
    if (data.end_position === "L1") endPositionFormat = "l1"
    if (data.end_position === "L2") endPositionFormat = "l2"
    else if (data.end_position === "L3") endPositionFormat = "l3"

    let malfunctionFormat= "FALSE"
    if(data.malfunction) malfunctionFormat= "TRUE"

    let bumpFormat= "FALSE"
    if(data.bump) bumpFormat= "TRUE"

    let trenchFormat= "FALSE"
    if(data.trench) trenchFormat= "TRUE"

    let strategyMemberFormat= "FALSE"
    if(data.strategy_member) strategyMemberFormat= "TRUE"

    // Output that will be written to a data string
    // Formatted for the spreadsheet
    const output = [
      Number(data.team_number),
      startingPositionFormat,
      Number(data.preload),
      Number(data.match_number),
      data.event,
      `${month}/${day}/${year}`,
      data.initials.toUpperCase(),

      Number(data.auto_fuel),
      Number(data.auto_miss),
      autoClimbFormat,

      Number(data.transition_fuel),
      Number(data.transition_miss),

      Number(data.active1_fuel),
      Number(data.active1_miss),
      active1_PassingFormat,
      active1_HumanPlayerFormat, 
      active1_NeutralFormat,
      active1_AllianceFormat,

      Number(data.active2_fuel),
      Number(data.active2_miss),
      active2_PassingFormat,
      active2_HumanPlayerFormat, 
      active2_NeutralFormat,
      active2_AllianceFormat,
    
      Number(data.endgame_fuel),
      Number(data.endgame_miss),
      endPositionFormat,
      bumpFormat,
      trenchFormat,
      malfunctionFormat,

      strategyMemberFormat,
      Number(data.driver_skill),
      Number(data.cycle_consistency),
      Number(data.speed),
      Number(data.cycle_speed),
      Number(data.intake),
      Number(data.stability),
      Number(data.versatility),
      
      data.notes,
    ]

    // This string is used to store the data in local storage
    let dataString = JSON.stringify(output)

    // removes quotation marks around TRUE and FALSE
    for(let i = 0; i < dataString.length; i++) {
      if(dataString.substring(i, i+5) === "FALSE") {
        dataString = dataString.substring(0, i-1) + dataString.substring(i, i+5) + dataString.substring(i+6, dataString.length)
      }

      if(dataString.substring(i, i+4) === "TRUE") {
        dataString = dataString.substring(0, i-1) + dataString.substring(i, i+4) + dataString.substring(i+5, dataString.length)
      }
    }

    // Resets the form
    // Keeps initials, scouting position, and event
    // Increments match number
    form.reset({
      ...initialValues,
      initials: data.initials,
      position: data.position,
      event: data.event,
      match_number: Number(data.match_number) + 1,
      preload: data.preload
    })

    // Saves the data string to local storage
    localStorage.setItem(dataString, "")
    setLocalStorageEntries(Object.entries(localStorage))

    // Scrolls to top to make it easier for the user
    window.scrollTo(0, 0)
  }

  // List of entries saved to local storage
  const [localStorageEntries, setLocalStorageEntries] = useState<
    [string, any][]
  >([])
  useEffect(() => {
    setLocalStorageEntries(Object.entries(localStorage).sort())
  }, [])

  return (
    <>
      <Head>
        <title>1257 Scouting App</title>
        <meta
          name="description"
          content="This app is used by FRC Team 1257 to scout how well robots perform for alliance selections."
        />
        <link rel="icon" href={snailIcon.src} />
      </Head>
      <AppBar />

      {/* Provides the context of the form to all the form elements */}
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="font-sans">
          {/* Sections of the website that correspond to different parts of a match */}
          <PreMatch />
          <Auto />
          <Transition />
          <TeleOp />
          <EndGame />
          <PostGame />

          {/* Submit button */}
          <div className="flex flex-row gap-4 mx-60 border-0 border-gray-600">
            <button
              type="submit"
              className="p-2 mb-8 text-3xl border-2 border-gray-600 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </FormProvider>

      {/* List of data strings saved to local storage */}
      <section className="flex flex-col gap-2 mx-auto text-center w-full bg-white">
        <div className="h-8" />
        <h2 className="text-4xl font-bold text-black">Data and QR Codes</h2>
        <ul>
          {localStorageEntries.map(([key, value], i) => (
            <li key={i} className="flex items-center justify-center gap-2">
              {/* Shows the string followed by a QR code of it */}
              <div className="flex flex-col mr-4">
                <div className="w-64 mt-8 mb-4 break-all sm:w-96 text-black">{key}</div>
                <QRCode value={key} className="mb-4" />
              </div>

              {/* Button to remove the data string from local storage */}
              <button
                onClick={() => {
                  localStorage.removeItem(key)
                  setLocalStorageEntries(Object.entries(localStorage))
                }}
                className="text-2xl text-black"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
        <div className="h-6" />
      </section>
    </>
  )
}
