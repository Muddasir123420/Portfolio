export default function Footer() {
  return (
    <footer className="py-8 bg-[#0F172A] text-center text-[#F8FAFC]">

      <div className="flex justify-center gap-6 mb-4">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muhammad-muddasir-khan-661178429/"
          target="_blank"
          rel="noreferrer"
          className="text-[#9ED0E0] text-3xl p-2 rounded-full 
                     hover:text-[#F8FAFC] hover:shadow-[0_0_20px_#6FA3B880] 
                     transform hover:scale-110 hover:-rotate-3 transition duration-300"
          aria-label="LinkedIn"
        >
          <i className="bx bxl-linkedin"></i>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Muddasir123420"
          target="_blank"
          rel="noreferrer"
          className="text-[#9ED0E0] text-3xl p-2 rounded-full 
                     hover:text-[#F8FAFC] hover:shadow-[0_0_20px_#6FA3B880] 
                     transform hover:scale-110 hover:-rotate-3 transition duration-300"
          aria-label="GitHub"
        >
          <i className="bx bxl-github"></i>
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadmuddasirkhan7@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-[#9ED0E0] text-3xl p-2 rounded-full 
                     hover:text-[#F8FAFC] hover:shadow-[0_0_20px_#6FA3B880] 
                     transform hover:scale-110 hover:-rotate-3 transition duration-300"
          aria-label="Email"
        >
          <i className="bx bx-envelope"></i>
        </a>

      </div>

      <p className="text-[#9ED0E0] text-sm">
        © Muddasir Khan | All Rights Reserved
      </p>
    </footer>
  );
}