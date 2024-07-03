export default function Contact() {
  return (
    <div className={"mt-[10rem] max-w-7xl mx-auto items-center justify-center flex flex-col gap-8"}>
      <h1 className={`font-bold text-2xl text-center tracking-widest lowercase mb-10`}>Contact</h1>
      <p className={""}>
        Yo slet, stuur me een berichtje op <a className={"tracking-widest underline font-semibold text-amber-800"} href={"mailto:info@kleinenschattig.nl"}>info@kleinenschattig.nl</a>
      </p>
      <a href={"https://timvancann.youcanbook.me/"} target={"_blank"} className={"bg-amber-500 rounded-full py-2 px-4 drop-shadow-lg"}>
        Boek direct wat tijd in mijn agenda
      </a>
    </div>
  )
}