const SectionTitle = ({
  title,
  description,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  titleClassName = "",
  paragraphClassName = "",
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h1
          className={`mb-4 w-full !leading-tight font-bold text-black sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl dark:text-white ${titleClassName}`}
        >
          {title}
        </h1>
        {/* Render description only if it's provided */}
        {description && (
          <h2 className="font-anka-coder mb-4 text-xl font-bold text-black sm:text-xl md:text-xl lg:text-xl xl:text-xl dark:text-white">
            {description}
          </h2>
        )}
        <p
          className={`text-body-color w-full text-base !leading-relaxed font-normal sm:text-lg md:text-lg lg:text-lg xl:text-lg ${paragraphClassName}`}
        >
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
