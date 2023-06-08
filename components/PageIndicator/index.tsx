const PageIndicator = ({pageTitle} : {pageTitle: string}) => {
  return (
    <div className="flex justify-end">
      <a className="w-40 text-end flex flex-col items-end gap-1">{pageTitle}
      <div className="w-[25%] border-b-black border-b-2"></div>
      </a>
    </div>
  );
}

export default PageIndicator;
