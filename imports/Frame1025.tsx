function Button() {
  return (
    <div className="absolute bg-[#08ddbc] h-10 left-0 rounded-[10px] top-0 w-[298px]" data-name="button">
      <div className="box-border content-stretch flex gap-3 h-10 items-center justify-center overflow-clip px-4 py-3.5 relative w-[298px]">
        <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#14151d] text-[14px] text-center text-nowrap">
          <p className="block leading-[20px] whitespace-pre">Ir a pagar</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-2px_0px_2px_1px_inset_#17ffdb,2px_2px_2px_0px_inset_#17ffdb]" />
      <div
        aria-hidden="true"
        className="absolute border border-[#1f8984] border-solid inset-0 pointer-events-none rounded-[10px]"
      />
    </div>
  );
}

export default function Frame1025() {
  return (
    <div className="relative size-full">
      <Button />
    </div>
  );
}