export const Footer = () => {
  return (
    <>
      <footer className="py-6 md:px-8 md:py-0 bg-slate-100">
        <div className="flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href={""}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              @siddheshjungade
            </a>
            . The source code is available on{" "}
            <a
              href={"https://github.com/siddheshJungade/portfolio"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
};
