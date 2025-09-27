function Icon() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[5px] shrink-0 size-6"
      data-name="icon"
    >
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b6b9d3] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function InputText() {
  return (
    <div
      className="basis-0 box-border content-stretch flex grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="input-text"
    >
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#5089ec] h-full shrink-0 w-px" data-name="type-indicator" />
      </div>
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#a1a3b9] text-[14px]">
        <p className="block leading-[20px]">Buscar Sede</p>
      </div>
    </div>
  );
}

function DrodownSearch() {
  return (
    <div className="h-12 relative shrink-0 w-full" data-name="drodown search">
      <div
        aria-hidden="true"
        className="absolute border-[#20222e] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-12 items-center justify-start px-4 py-3 relative w-full">
          <Icon />
          <InputText />
        </div>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-5" data-name="checkbox">
      <div
        aria-hidden="true"
        className="absolute border border-[#868bb5] border-solid inset-0 pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function CheckboxContainer() {
  return (
    <div
      className="box-border content-stretch flex gap-2.5 items-center justify-start p-[4px] relative shrink-0"
      data-name="checkbox container"
    >
      <Checkbox />
    </div>
  );
}

function TextGroup() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="text_group"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f3f3f8] text-[14px] w-full">
        <p className="block leading-[20px]">{`Todas `}</p>
      </div>
    </div>
  );
}

function ItemCore() {
  return (
    <div className="relative rounded-xl shrink-0 w-full" data-name="item core">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-3 items-center justify-start px-4 py-2 relative w-full">
          <CheckboxContainer />
          <TextGroup />
        </div>
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-5" data-name="checkbox">
      <div
        aria-hidden="true"
        className="absolute border border-[#868bb5] border-solid inset-0 pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function CheckboxContainer1() {
  return (
    <div
      className="box-border content-stretch flex gap-2.5 items-center justify-start p-[4px] relative shrink-0"
      data-name="checkbox container"
    >
      <Checkbox1 />
    </div>
  );
}

function TextGroup1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="text_group"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f3f3f8] text-[0px] w-full">
        <p className="leading-[20px] text-[14px]">
          Sede Principal<span className="text-[#868bb5]"> </span>
          <span className="font-['Inter:Bold',_sans-serif] font-bold not-italic text-[#b6b9d3]">{`· `}</span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#b6b9d3]">Bogotá</span>
        </p>
      </div>
    </div>
  );
}

function ItemCore1() {
  return (
    <div className="relative rounded-xl shrink-0 w-full" data-name="item core">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-3 items-center justify-start px-4 py-2 relative w-full">
          <CheckboxContainer1 />
          <TextGroup1 />
        </div>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-5" data-name="checkbox">
      <div
        aria-hidden="true"
        className="absolute border border-[#868bb5] border-solid inset-0 pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function CheckboxContainer2() {
  return (
    <div
      className="box-border content-stretch flex gap-2.5 items-center justify-start p-[4px] relative shrink-0"
      data-name="checkbox container"
    >
      <Checkbox2 />
    </div>
  );
}

function TextGroup2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="text_group"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f3f3f8] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">
          <span>{`Sede Norte  `}</span>
          <span className="font-['Inter:Bold',_sans-serif] font-bold not-italic text-[#b6b9d3]">{`· `}</span>
          <span className="text-[#b6b9d3]">Bogotá</span>
        </p>
      </div>
    </div>
  );
}

function ItemCore2() {
  return (
    <div className="relative rounded-xl shrink-0 w-full" data-name="item core">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-3 items-center justify-start px-4 py-2 relative w-full">
          <CheckboxContainer2 />
          <TextGroup2 />
        </div>
      </div>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-5" data-name="checkbox">
      <div
        aria-hidden="true"
        className="absolute border border-[#868bb5] border-solid inset-0 pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function CheckboxContainer3() {
  return (
    <div
      className="box-border content-stretch flex gap-2.5 items-center justify-start p-[4px] relative shrink-0"
      data-name="checkbox container"
    >
      <Checkbox3 />
    </div>
  );
}

function TextGroup3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="text_group"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f3f3f8] text-[0px] w-full">
        <p className="leading-[20px] text-[14px]">
          <span>{`Sede Zona Franca `}</span>
          <span className="font-['Inter:Bold',_sans-serif] font-bold not-italic text-[#b6b9d3]">{`· `}</span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#b6b9d3]">Bogotá</span>
        </p>
      </div>
    </div>
  );
}

function ItemCore3() {
  return (
    <div className="relative rounded-xl shrink-0 w-full" data-name="item core">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-3 items-center justify-start px-4 py-2 relative w-full">
          <CheckboxContainer3 />
          <TextGroup3 />
        </div>
      </div>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-5" data-name="checkbox">
      <div
        aria-hidden="true"
        className="absolute border border-[#868bb5] border-solid inset-0 pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function CheckboxContainer4() {
  return (
    <div
      className="box-border content-stretch flex gap-2.5 items-center justify-start p-[4px] relative shrink-0"
      data-name="checkbox container"
    >
      <Checkbox4 />
    </div>
  );
}

function TextGroup4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="text_group"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f3f3f8] text-[0px] w-full">
        <p className="leading-[20px] text-[14px]">
          <span className="text-[#f3f3f8]">{`Sede Zona Franca `}</span>
          <span className="font-['Inter:Bold',_sans-serif] font-bold not-italic text-[#f3f3f8]">{`· `}</span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#b6b9d3]">Medellín</span>
        </p>
      </div>
    </div>
  );
}

function ItemCore4() {
  return (
    <div className="relative rounded-xl shrink-0 w-full" data-name="item core">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-3 items-center justify-start px-4 py-2 relative w-full">
          <CheckboxContainer4 />
          <TextGroup4 />
        </div>
      </div>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-5" data-name="checkbox">
      <div
        aria-hidden="true"
        className="absolute border border-[#868bb5] border-solid inset-0 pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function CheckboxContainer5() {
  return (
    <div
      className="box-border content-stretch flex gap-2.5 items-center justify-start p-[4px] relative shrink-0"
      data-name="checkbox container"
    >
      <Checkbox5 />
    </div>
  );
}

function TextGroup5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="text_group"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f3f3f8] text-[14px] w-full">
        <p className="leading-[20px]">
          <span>{`Sede Sur `}</span>
          <span className="text-[#b6b9d3]">· Bogotá</span>
        </p>
      </div>
    </div>
  );
}

function ItemCore5() {
  return (
    <div className="relative rounded-xl shrink-0 w-full" data-name="item core">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-3 items-center justify-start px-4 py-2 relative w-full">
          <CheckboxContainer5 />
          <TextGroup5 />
        </div>
      </div>
    </div>
  );
}

function ItemList() {
  return (
    <div className="relative shrink-0 w-full" data-name="item list">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[8px] relative w-full">
          <ItemCore />
          <ItemCore1 />
          <ItemCore2 />
          <ItemCore3 />
          <ItemCore4 />
          <ItemCore5 />
        </div>
      </div>
    </div>
  );
}

function DropdownList() {
  return (
    <div
      className="absolute backdrop-blur-[10px] backdrop-filter bg-[rgba(32,34,46,0.3)] left-0 rounded-xl top-0 w-[300px]"
      data-name="dropdown list"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-[300px]">
        <DrodownSearch />
        <ItemList />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#3a3c50] border-solid inset-0 pointer-events-none rounded-xl shadow-[2px_2px_6px_0px_#07080c]"
      />
    </div>
  );
}

export default function Frame1026() {
  return (
    <div className="relative size-full">
      <DropdownList />
    </div>
  );
}