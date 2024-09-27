const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  titleClassName = "", 
  paragraphClassName = "",// Add this line
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2
          className={`mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] ${titleClassName}`} // Modify this line
        >
          {title}
        </h2>
        <p 
          className={`text-base font-normal !leading-relaxed text-body-color md:text-lg ${paragraphClassName}`}
        >
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;

