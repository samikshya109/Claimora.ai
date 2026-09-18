import svgPaths from "./svg-9vo1j13sjm";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] tracking-[-0.6px] whitespace-nowrap">Form Fields</p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0" data-name="Paragraph:margin">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-[672px]">Input components for capturing user data. All form elements share the same height (44px), border radius (8px), and border width (2px) for visual consistency.</p>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="SectionHeader">
      <Heading />
      <ParagraphMargin />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Text Input — States</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] whitespace-nowrap">Default</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex flex-[376_0_0] flex-col h-[44px] items-start justify-center min-w-px overflow-clip px-[12px] relative" data-name="Text Input">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-full">Enter text...</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white border-2 border-[#e5e7eb] border-solid content-stretch flex h-[48px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <TextInput />
    </div>
  );
}

function DsInput() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="DSInput">
      <Label />
      <Container1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pt-[6px] relative shrink-0 w-[404px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">border: #E5E7EB · bg: #FFF</p>
    </div>
  );
}

function Container() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <DsInput />
      <Paragraph />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] whitespace-nowrap">Focus (click to trigger)</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="content-stretch flex flex-[376_0_0] flex-col h-[44px] items-start justify-center min-w-px overflow-clip px-[12px] relative" data-name="Text Input">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-full">Enter text...</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white border-2 border-[#e5e7eb] border-solid content-stretch flex h-[48px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <TextInput1 />
    </div>
  );
}

function DsInput1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="DSInput">
      <Label1 />
      <Container3 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pt-[6px] relative shrink-0 w-[404px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">border: #0D9488 · bg: #FFF</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <DsInput1 />
      <Paragraph1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] whitespace-nowrap">Disabled</p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="content-stretch flex flex-[376_0_0] flex-col h-[44px] items-start justify-center min-w-px overflow-clip px-[12px] relative" data-name="Text Input">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-full">Enter text...</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f9fafb] border-2 border-[#e5e7eb] border-solid content-stretch flex h-[48px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <TextInput2 />
    </div>
  );
}

function DsInput2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="DSInput">
      <Label2 />
      <Container5 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pt-[6px] relative shrink-0 w-[404px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">border: #E5E7EB · bg: #F9FAFB</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <DsInput2 />
      <Paragraph2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] whitespace-nowrap">Error</p>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="content-stretch flex flex-[348_0_0] flex-col h-[44px] items-start justify-center min-w-px overflow-clip px-[12px] relative" data-name="Text Input">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-full">Enter text...</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_17)" id="Icon">
          <path d={svgPaths.p18fc8d80} id="Vector" stroke="#D4183D" strokeWidth="1.5" />
          <path d="M8 5V8.5M8 11H8.01" id="Vector_2" stroke="#D4183D" strokeLinecap="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_17">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Text">
      <Icon />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white border-2 border-[#d4183d] border-solid content-stretch flex h-[48px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <TextInput3 />
      <Text />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#e7000b] text-[12px] whitespace-nowrap">This field is required.</p>
    </div>
  );
}

function DsInput3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="DSInput">
      <Label3 />
      <Container7 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pt-[6px] relative shrink-0 w-[404px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">border: #D4183D · error icon</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <DsInput3 />
      <Paragraph4 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] whitespace-nowrap">Success</p>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="content-stretch flex flex-[348_0_0] flex-col h-[44px] items-start justify-center min-w-px overflow-clip px-[12px] relative" data-name="Text Input">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">agent-task-003</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_14)" id="Icon">
          <path d={svgPaths.p18fc8d80} id="Vector" stroke="#16A34A" strokeWidth="1.5" />
          <path d="M5 8L7.5 10.5L11 5" id="Vector_2" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Text">
      <Icon1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white border-2 border-[#16a34a] border-solid content-stretch flex h-[48px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <TextInput4 />
      <Text1 />
    </div>
  );
}

function DsInput4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="DSInput">
      <Label4 />
      <Container9 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pt-[6px] relative shrink-0 w-[404px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">border: #16A34A · check icon</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <DsInput4 />
      <Paragraph5 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] whitespace-nowrap">With helper text</p>
    </div>
  );
}

function TextInput5() {
  return (
    <div className="content-stretch flex flex-[376_0_0] flex-col h-[44px] items-start justify-center min-w-px overflow-clip px-[12px] relative" data-name="Text Input">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-full">e.g. GPT-4o</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white border-2 border-[#e5e7eb] border-solid content-stretch flex h-[48px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <TextInput5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Agent model identifier. Leave blank to use default.</p>
    </div>
  );
}

function DsInput5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="DSInput">
      <Label5 />
      <Container11 />
      <Paragraph6 />
    </div>
  );
}

function Container10() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <DsInput5 />
    </div>
  );
}

function FormFieldsSection1() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[__404px_404px] grid-rows-[___96px_120px_97.50px] relative shrink-0 w-full" data-name="FormFieldsSection">
      <Container />
      <Container2 />
      <Container4 />
      <Container6 />
      <Container8 />
      <Container10 />
    </div>
  );
}

function FormFieldsSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="FormFieldsSection:margin">
      <FormFieldsSection1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Height</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">44px</p>
    </div>
  );
}

function SpecRow() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Padding</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">0 12px</p>
    </div>
  );
}

function SpecRow1() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Font size</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">14px / 400</p>
    </div>
  );
}

function SpecRow2() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Placeholder</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#9CA3AF (Gray/400)</p>
    </div>
  );
}

function SpecRow3() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border (default)</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">2px solid #E5E7EB</p>
    </div>
  );
}

function SpecRow4() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border (focus)</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">2px solid #0D9488</p>
    </div>
  );
}

function SpecRow5() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border (error)</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">2px solid #D4183D</p>
    </div>
  );
}

function SpecRow6() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border (disabled)</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">2px solid #E5E7EB</p>
    </div>
  );
}

function SpecRow7() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Bg (disabled)</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#F9FAFB</p>
    </div>
  );
}

function SpecRow8() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border radius</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">8px</p>
    </div>
  );
}

function SpecRow9() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Transition</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">border-color 150ms ease</p>
    </div>
  );
}

function SpecRow10() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text22 />
      <Text23 />
    </div>
  );
}

function FormFieldsSection2() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="FormFieldsSection">
      <SpecRow />
      <SpecRow1 />
      <SpecRow2 />
      <SpecRow3 />
      <SpecRow4 />
      <SpecRow5 />
      <SpecRow6 />
      <SpecRow7 />
      <SpecRow8 />
      <SpecRow9 />
      <SpecRow10 />
    </div>
  );
}

function FormFieldsSectionMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="FormFieldsSection:margin">
      <FormFieldsSection2 />
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[15px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#5d0ec0] text-[13px] whitespace-nowrap">◈</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#5d0ec0] text-[0px] w-[781px]">
        <span className="leading-[19.5px] text-[12px]">Edge case — autofill:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` Browser autofill overrides background-color with a yellow tint. Override with: input:-webkit-autofill { box-shadow: 0 0 0 100px white inset; } to preserve the design.`}</span>
      </p>
    </div>
  );
}

function Note() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text24 />
      <Paragraph7 />
    </div>
  );
}

function NoteMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Note:margin">
      <Note />
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[15px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#5d0ec0] text-[13px] whitespace-nowrap">◈</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#5d0ec0] text-[0px] w-[781px]">
        <span className="leading-[19.5px] text-[12px]">Edge case — long placeholder:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` Placeholder text must not exceed the input width. Use short, clear placeholder copy (max ~30 chars). If longer context is needed, use the helperText prop below the input.`}</span>
      </p>
    </div>
  );
}

function Note1() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text25 />
      <Paragraph8 />
    </div>
  );
}

function NoteMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Note:margin">
      <Note1 />
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Input.tsx</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#00786f] text-[11px] text-center whitespace-nowrap">Copy</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f3f4f6] border-[#e5e7eb] border-b border-solid content-stretch flex items-center justify-between px-[12px] py-[6px] relative shrink-0 w-full" data-name="Container">
      <Text26 />
      <Button />
    </div>
  );
}

function CodeBlock1() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[539px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-name="Code Block">
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Default`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Input`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  label="Agent Name"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  placeholder="e.g. Research Agent"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  helperText="Unique identifier for this agent."`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`/>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Error state`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Input`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  label="Task ID"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  errorText="Task ID is required."`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`/>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Disabled`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Input`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  label="Model"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  state="disabled"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  value="GPT-4o"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`/>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// With prefix/suffix`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Input`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  label="Timeout"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  prefix={<ClockIcon />}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  suffix="seconds"`}</p>
        <p className="leading-[19.5px] whitespace-pre">{`/>`}</p>
      </div>
    </div>
  );
}

function CodeBlock() {
  return (
    <div className="border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[570.5px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="CodeBlock">
      <Container12 />
      <CodeBlock1 />
    </div>
  );
}

function CodeBlockMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="CodeBlock:margin">
      <CodeBlock />
    </div>
  );
}

function SubSection() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading1 />
      <FormFieldsSectionMargin />
      <FormFieldsSectionMargin1 />
      <NoteMargin />
      <NoteMargin1 />
      <CodeBlockMargin />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">{`Text Input — Prefix & Suffix`}</p>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] whitespace-nowrap">Search</p>
    </div>
  );
}

function FormFieldsSection4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="FormFieldsSection">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="FormFieldsSection">
          <path d={svgPaths.p1906ee40} id="Vector" stroke="#9CA3AF" strokeWidth="1.5" />
          <path d="M11 11L14 14" id="Vector_2" stroke="#9CA3AF" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] pr-[4px] relative shrink-0" data-name="Text">
      <FormFieldsSection4 />
    </div>
  );
}

function TextInput6() {
  return (
    <div className="content-stretch flex flex-[344_0_0] flex-col h-[44px] items-start justify-center min-w-px overflow-clip px-[12px] relative" data-name="Text Input">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-full">Search agents...</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white border-2 border-[#e5e7eb] border-solid content-stretch flex h-[48px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Text27 />
      <TextInput6 />
    </div>
  );
}

function DsInput6() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[6px] items-start justify-self-start relative row-1 self-stretch shrink-0 w-[404px]" data-name="DSInput">
      <Label6 />
      <Container13 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] whitespace-nowrap">Timeout</p>
    </div>
  );
}

function TextInput7() {
  return (
    <div className="content-stretch flex flex-[307.828_0_0] flex-col h-[44px] items-start justify-center min-w-px overflow-clip px-[12px] relative" data-name="Text Input">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-full">30</p>
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] pr-[12px] relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6a7282] text-[13px] whitespace-nowrap">seconds</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white border-2 border-[#e5e7eb] border-solid content-stretch flex h-[48px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <TextInput7 />
      <Text28 />
    </div>
  );
}

function DsInput7() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[6px] items-start justify-self-start relative row-1 self-stretch shrink-0 w-[404px]" data-name="DSInput">
      <Label7 />
      <Container14 />
    </div>
  );
}

function FormFieldsSection3() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[__404px_404px] grid-rows-[_73.50px] relative shrink-0 w-full" data-name="FormFieldsSection">
      <DsInput6 />
      <DsInput7 />
    </div>
  );
}

function FormFieldsSectionMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="FormFieldsSection:margin">
      <FormFieldsSection3 />
    </div>
  );
}

function SubSection1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading2 />
      <FormFieldsSectionMargin2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Select Dropdown</p>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] whitespace-nowrap">Agent Model</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-[12px] overflow-clip top-0 w-[356px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">GPT-4o</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="h-[44px] relative shrink-0 w-[400px]" data-name="Dropdown">
      <Container16 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[372px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white border-2 border-[#e5e7eb] border-solid content-stretch flex items-center relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Dropdown />
      <Icon2 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">The LLM powering this agent.</p>
    </div>
  );
}

function DsSelect() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[6px] items-start justify-self-start relative row-1 self-stretch shrink-0 w-[404px]" data-name="DSSelect">
      <Label8 />
      <Container15 />
      <Paragraph9 />
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] whitespace-nowrap">Priority</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-[12px] overflow-clip top-0 w-[356px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">Critical</p>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="h-[44px] relative shrink-0 w-[400px]" data-name="Dropdown">
      <Container18 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[372px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f9fafb] border-2 border-[#e5e7eb] border-solid content-stretch flex items-center relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Dropdown1 />
      <Icon3 />
    </div>
  );
}

function DsSelect1() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[6px] items-start justify-self-start relative row-1 self-stretch shrink-0 w-[404px]" data-name="DSSelect">
      <Label9 />
      <Container17 />
    </div>
  );
}

function FormFieldsSection5() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[__404px_404px] grid-rows-[_97.50px] relative shrink-0 w-full" data-name="FormFieldsSection">
      <DsSelect />
      <DsSelect1 />
    </div>
  );
}

function FormFieldsSectionMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="FormFieldsSection:margin">
      <FormFieldsSection5 />
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[13px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[13px] whitespace-nowrap">ℹ</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[12px] w-[784px]">Native select elements use OS-rendered dropdowns. For custom dropdown UI (multi-select, search, grouped options) use the Dropdown component from Patterns.</p>
    </div>
  );
}

function Note2() {
  return (
    <div className="bg-[#eff6ff] border border-[#bedbff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text29 />
      <Paragraph10 />
    </div>
  );
}

function NoteMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Note:margin">
      <Note2 />
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Select.tsx</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#00786f] text-[11px] text-center whitespace-nowrap">Copy</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f3f4f6] border-[#e5e7eb] border-b border-solid content-stretch flex items-center justify-between px-[12px] py-[6px] relative shrink-0 w-full" data-name="Container">
      <Text30 />
      <Button1 />
    </div>
  );
}

function CodeBlock3() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[129.5px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-name="Code Block">
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Select`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  label="Agent Model"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  options={["GPT-4o", "Claude 3.5 Sonnet"]}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  helperText="The LLM powering this agent."`}</p>
        <p className="leading-[19.5px] whitespace-pre">{`/>`}</p>
      </div>
    </div>
  );
}

function CodeBlock2() {
  return (
    <div className="border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[161px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="CodeBlock">
      <Container19 />
      <CodeBlock3 />
    </div>
  );
}

function CodeBlockMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="CodeBlock:margin">
      <CodeBlock2 />
    </div>
  );
}

function SubSection2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading3 />
      <FormFieldsSectionMargin3 />
      <NoteMargin2 />
      <CodeBlockMargin1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Textarea</p>
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] whitespace-nowrap">Agent Instructions</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="border-2 border-[#e5e7eb] border-solid content-stretch flex flex-col h-[108px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Text Area">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-full">Describe what this agent should do...</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Be specific. Supports markdown.</p>
    </div>
  );
}

function DsTextarea() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[6px] items-start justify-self-start relative row-1 self-stretch shrink-0 w-[404px]" data-name="DSTextarea">
      <Label10 />
      <TextArea />
      <Paragraph11 />
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] whitespace-nowrap">Notes (disabled)</p>
    </div>
  );
}

function TextArea1() {
  return (
    <div className="bg-[#f9fafb] border-2 border-[#e5e7eb] border-solid content-stretch flex flex-col h-[108px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Text Area">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-full">No notes yet.</p>
    </div>
  );
}

function DsTextarea1() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[6px] items-start justify-self-start relative row-1 self-stretch shrink-0 w-[404px]" data-name="DSTextarea">
      <Label11 />
      <TextArea1 />
    </div>
  );
}

function FormFieldsSection6() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[__404px_404px] grid-rows-[_157.50px] relative shrink-0 w-full" data-name="FormFieldsSection">
      <DsTextarea />
      <DsTextarea1 />
    </div>
  );
}

function FormFieldsSectionMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="FormFieldsSection:margin">
      <FormFieldsSection6 />
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[15px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#5d0ec0] text-[13px] whitespace-nowrap">◈</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#5d0ec0] text-[0px] w-[781px]">
        <span className="leading-[19.5px] text-[12px]">Edge case — resize:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` By default, textarea is resize: none to prevent layout breakage. If resizing is enabled, constrain with min-height and max-height. Never allow width resize.`}</span>
      </p>
    </div>
  );
}

function Note3() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text31 />
      <Paragraph12 />
    </div>
  );
}

function NoteMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Note:margin">
      <Note3 />
    </div>
  );
}

function SubSection3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading4 />
      <FormFieldsSectionMargin4 />
      <NoteMargin3 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">{`Checkbox, Toggle & Radio`}</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">Checkbox</p>
    </div>
  );
}

function Text32() {
  return <div className="bg-white border-2 border-[#d1d5db] border-solid relative rounded-[4px] shrink-0 size-[18px]" data-name="Text" />;
}

function Text33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Enable auto-retry</p>
    </div>
  );
}

function DsCheckbox() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0" data-name="DSCheckbox">
      <Text32 />
      <Text33 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[8px] relative shrink-0 w-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 10 8" width="10">
        <g clipPath="url(#clip0_0_4)" id="Icon">
          <path d="M1 4L4 7L9 1" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="8" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text34() {
  return (
    <div className="bg-[#0d9488] border-2 border-[#0d9488] border-solid content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[18px]" data-name="Text">
      <Icon4 />
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Send notifications</p>
    </div>
  );
}

function DsCheckbox1() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0" data-name="DSCheckbox">
      <Text34 />
      <Text35 />
    </div>
  );
}

function Text36() {
  return <div className="bg-white border-2 border-[#d1d5db] border-solid relative rounded-[4px] shrink-0 size-[18px]" data-name="Text" />;
}

function Text37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Read-only (disabled)</p>
    </div>
  );
}

function DsCheckbox2() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center opacity-40 relative shrink-0" data-name="DSCheckbox">
      <Text36 />
      <Text37 />
    </div>
  );
}

function Text39() {
  return <div className="bg-white h-[2px] relative rounded-[16777200px] shrink-0 w-[8px]" data-name="Text" />;
}

function Text38() {
  return (
    <div className="bg-[#0d9488] border-2 border-[#0d9488] border-solid content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[18px]" data-name="Text">
      <Text39 />
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Partial select</p>
    </div>
  );
}

function DsCheckbox3() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0" data-name="DSCheckbox">
      <Text38 />
      <Text40 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[24px] h-[21px] items-start relative shrink-0 w-full" data-name="Container">
      <DsCheckbox />
      <DsCheckbox1 />
      <DsCheckbox2 />
      <DsCheckbox3 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Container:margin">
      <Container21 />
    </div>
  );
}

function FormFieldsSection7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] top-[32px] w-[641.352px]" data-name="FormFieldsSection">
      <Paragraph13 />
      <ContainerMargin />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">Toggle</p>
    </div>
  );
}

function Text41() {
  return <div className="absolute bg-white left-[3px] rounded-[16777200px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[16px] top-[3px]" data-name="Text" />;
}

function Switch() {
  return (
    <div className="bg-[#d1d5db] h-[22px] relative rounded-[16777200px] shrink-0 w-[40px]" data-name="Switch">
      <Text41 />
    </div>
  );
}

function Text42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Live mode</p>
    </div>
  );
}

function DsToggle() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center relative shrink-0" data-name="DSToggle">
      <Switch />
      <Text42 />
    </div>
  );
}

function Text43() {
  return <div className="absolute bg-white left-[21px] rounded-[16777200px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[16px] top-[3px]" data-name="Text" />;
}

function Switch1() {
  return (
    <div className="bg-[#0d9488] h-[22px] relative rounded-[16777200px] shrink-0 w-[40px]" data-name="Switch">
      <Text43 />
    </div>
  );
}

function Text44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Auto-run</p>
    </div>
  );
}

function DsToggle1() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center relative shrink-0" data-name="DSToggle">
      <Switch1 />
      <Text44 />
    </div>
  );
}

function Text45() {
  return <div className="absolute bg-white left-[3px] rounded-[16777200px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[16px] top-[3px]" data-name="Text" />;
}

function Switch2() {
  return (
    <div className="bg-[#d1d5db] h-[22px] relative rounded-[16777200px] shrink-0 w-[40px]" data-name="Switch">
      <Text45 />
    </div>
  );
}

function Text46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Archived (disabled)</p>
    </div>
  );
}

function DsToggle2() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center opacity-40 relative shrink-0" data-name="DSToggle">
      <Switch2 />
      <Text46 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[24px] h-[22px] items-start relative shrink-0 w-full" data-name="Container">
      <DsToggle />
      <DsToggle1 />
      <DsToggle2 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Container:margin">
      <Container22 />
    </div>
  );
}

function FormFieldsSection8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] top-[105.5px] w-[460.039px]" data-name="FormFieldsSection">
      <Paragraph14 />
      <ContainerMargin1 />
    </div>
  );
}

function ParagraphMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Paragraph:margin">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] whitespace-nowrap">Execution priority</p>
    </div>
  );
}

function Text48() {
  return <div className="bg-[#0d9488] relative rounded-[16777200px] shrink-0 size-[8px]" data-name="Text" />;
}

function Text47() {
  return (
    <div className="bg-white border-2 border-[#0d9488] border-solid content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[18px]" data-name="Text">
      <Text48 />
    </div>
  );
}

function Text49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Critical</p>
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Label">
      <Text47 />
      <Text49 />
    </div>
  );
}

function Text50() {
  return <div className="bg-white border-2 border-[#d1d5db] border-solid relative rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Text51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">High</p>
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Label">
      <Text50 />
      <Text51 />
    </div>
  );
}

function Text52() {
  return <div className="bg-white border-2 border-[#d1d5db] border-solid relative rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Text53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Medium</p>
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Label">
      <Text52 />
      <Text53 />
    </div>
  );
}

function Text54() {
  return <div className="bg-white border-2 border-[#d1d5db] border-solid relative rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Text55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Low</p>
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Label">
      <Text54 />
      <Text55 />
    </div>
  );
}

function FormFieldsSection9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[32px] top-[180px] w-[109.469px]" data-name="FormFieldsSection">
      <ParagraphMargin1 />
      <Label12 />
      <Label13 />
      <Label14 />
      <Label15 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid h-[353.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <FormFieldsSection7 />
      <FormFieldsSection8 />
      <FormFieldsSection9 />
    </div>
  );
}

function PreviewBoxMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="PreviewBox:margin">
      <Container20 />
    </div>
  );
}

function Text56() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[13px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[13px] whitespace-nowrap">ℹ</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[12px] w-[784px]">Checkbox and radio touch targets are always ≥ 24×24px via padding, even though the visual indicator is 18×18px. Toggle track is 40×22px; thumb is 16×16px with 3px inset.</p>
    </div>
  );
}

function Note4() {
  return (
    <div className="bg-[#eff6ff] border border-[#bedbff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text56 />
      <Paragraph15 />
    </div>
  );
}

function NoteMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Note:margin">
      <Note4 />
    </div>
  );
}

function Text57() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[15px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#5d0ec0] text-[13px] whitespace-nowrap">◈</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#5d0ec0] text-[0px] w-[781px]">
        <span className="leading-[19.5px] text-[12px]">Edge case — indeterminate checkbox:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` Indeterminate state (partial selection) must be set via JavaScript ref.indeterminate = true — it cannot be set via HTML alone. Always provide a clear label indicating what "partial" means (e.g. "3 of 8 selected").`}</span>
      </p>
    </div>
  );
}

function Note5() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text57 />
      <Paragraph16 />
    </div>
  );
}

function NoteMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Note:margin">
      <Note5 />
    </div>
  );
}

function Text58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Checkbox / Toggle / Radio</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#00786f] text-[11px] text-center whitespace-nowrap">Copy</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f3f4f6] border-[#e5e7eb] border-b border-solid content-stretch flex items-center justify-between px-[12px] py-[6px] relative shrink-0 w-full" data-name="Container">
      <Text58 />
      <Button2 />
    </div>
  );
}

function CodeBlock5() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[344px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-name="Code Block">
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Checkbox`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Checkbox label="Enable auto-retry" checked={retry} onChange={setRetry} />`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Indeterminate — set ref.indeterminate manually`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Checkbox label="Select all" indeterminate />`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Toggle`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Toggle label="Live mode" defaultOn={false} />`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Radio group`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<RadioGroup`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  legend="Priority"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  options={["Critical", "High", "Medium", "Low"]}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  value={priority}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  onChange={setPriority}`}</p>
        <p className="leading-[19.5px] whitespace-pre">{`/>`}</p>
      </div>
    </div>
  );
}

function CodeBlock4() {
  return (
    <div className="border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[375.5px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="CodeBlock">
      <Container23 />
      <CodeBlock5 />
    </div>
  );
}

function CodeBlockMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="CodeBlock:margin">
      <CodeBlock4 />
    </div>
  );
}

function SubSection4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading5 />
      <PreviewBoxMargin />
      <NoteMargin4 />
      <NoteMargin5 />
      <CodeBlockMargin2 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Composed Form — Agent Configuration</p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">New Agent</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start pt-[4px] relative shrink-0 w-[526px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6a7282] text-[13px] whitespace-nowrap">Configure a new AI agent for your project.</p>
    </div>
  );
}

function Label16() {
  return (
    <div className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium h-[19.5px] leading-[19.5px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="Label">
      <p className="absolute left-0 text-[#364153] top-px">Agent Name</p>
      <p className="absolute left-[78.91px] text-[#fb2c36] top-px">*</p>
    </div>
  );
}

function TextInput8() {
  return (
    <div className="content-stretch flex flex-[498_0_0] flex-col h-[44px] items-start justify-center min-w-px overflow-clip px-[12px] relative" data-name="Text Input">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-full">e.g. Research Agent</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white border-2 border-[#e5e7eb] border-solid content-stretch flex h-[48px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <TextInput8 />
    </div>
  );
}

function DsInput8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[526px]" data-name="DSInput">
      <Label16 />
      <Container25 />
    </div>
  );
}

function Label17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] whitespace-nowrap">Model</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-[12px] overflow-clip top-0 w-[478px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">GPT-4o</p>
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="h-[44px] relative shrink-0 w-[522px]" data-name="Dropdown">
      <Container27 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[494px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white border-2 border-[#e5e7eb] border-solid content-stretch flex items-center relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Dropdown2 />
      <Icon5 />
    </div>
  );
}

function DsSelect2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[526px]" data-name="DSSelect">
      <Label17 />
      <Container26 />
    </div>
  );
}

function Label18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] whitespace-nowrap">Instructions</p>
    </div>
  );
}

function TextArea2() {
  return (
    <div className="border-2 border-[#e5e7eb] border-solid content-stretch flex flex-col h-[87px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Text Area">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-full">What should this agent do?</p>
    </div>
  );
}

function DsTextarea2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[526px]" data-name="DSTextarea">
      <Label18 />
      <TextArea2 />
    </div>
  );
}

function Text59() {
  return <div className="absolute bg-white left-[3px] rounded-[16777200px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[16px] top-[3px]" data-name="Text" />;
}

function Switch3() {
  return (
    <div className="bg-[#d1d5db] h-[22px] relative rounded-[16777200px] shrink-0 w-[40px]" data-name="Switch">
      <Text59 />
    </div>
  );
}

function Text60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Start immediately</p>
    </div>
  );
}

function DsToggle3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="DSToggle">
      <Switch3 />
      <Text60 />
    </div>
  );
}

function Button3() {
  return (
    <div className="border-2 border-[#e5e7eb] border-solid content-stretch flex flex-col h-[36px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] text-center whitespace-nowrap">Cancel</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#0d9488] content-stretch flex flex-col h-[36px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Create Agent</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[8px] relative shrink-0 w-full" data-name="Container">
      <DsToggle3 />
      <Container29 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[20px] relative shrink-0 w-[526px]" data-name="Container">
      <DsInput8 />
      <DsSelect2 />
      <DsTextarea2 />
      <Container28 />
    </div>
  );
}

function FormFieldsSection10() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start max-w-[576px] p-[24px] relative rounded-[12px] shrink-0 w-[576px]" data-name="FormFieldsSection">
      <Heading7 />
      <Paragraph17 />
      <Container24 />
    </div>
  );
}

function FormFieldsSectionMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0" data-name="FormFieldsSection:margin">
      <FormFieldsSection10 />
    </div>
  );
}

function Text61() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[13px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[13px] whitespace-nowrap">ℹ</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[12px] w-[784px]">In composed forms: label is always above the field (never inline or placeholder-only). Required fields use a red asterisk. Error messages appear directly below the field that caused them — never as a banner above the form.</p>
    </div>
  );
}

function Note6() {
  return (
    <div className="bg-[#eff6ff] border border-[#bedbff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text61 />
      <Paragraph18 />
    </div>
  );
}

function NoteMargin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Note:margin">
      <Note6 />
    </div>
  );
}

function SubSection5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading6 />
      <FormFieldsSectionMargin5 />
      <NoteMargin6 />
    </div>
  );
}

function FormFieldsSection() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[896px] pb-[80px] pt-[40px] px-[32px] relative shrink-0 w-[896px]" data-name="FormFieldsSection">
      <SectionHeader />
      <SubSection />
      <SubSection1 />
      <SubSection2 />
      <SubSection3 />
      <SubSection4 />
      <SubSection5 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-center pl-[224px] pt-[56px] relative shrink-0 w-full" data-name="App">
      <FormFieldsSection />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_8)" id="Icon">
          <path d={svgPaths.p2add52c0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.6" />
          <path d={svgPaths.p2ee86900} fill="white" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#0d9488] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.25px] not-italic relative shrink-0 text-[#101828] text-[13px] whitespace-nowrap">Claimora</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] not-italic relative shrink-0 text-[#99a1af] text-[10px] whitespace-nowrap">Design System v1.0</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[92.117px]" data-name="Container">
      <Paragraph19 />
      <Paragraph20 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container30() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start p-[20px] relative shrink-0 w-full" data-name="Container">
      <Container31 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Foundations</p>
    </div>
  );
}

function Text62() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">◈</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text62 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">Foundations</p>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[6px] relative shrink-0 w-full" data-name="Button:margin">
      <Button5 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph21 />
      <ButtonMargin />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Components</p>
    </div>
  );
}

function Text63() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">⬡</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text63 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">Button</p>
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[6px] relative shrink-0 w-full" data-name="Button:margin">
      <Button6 />
    </div>
  );
}

function Text64() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0d9488] text-[14px] text-center whitespace-nowrap">⊟</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text64 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#0d9488] text-[13px] whitespace-nowrap">Form Fields</p>
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[2px] relative shrink-0 w-full" data-name="Button:margin">
      <Button7 />
    </div>
  );
}

function Text65() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">⊞</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text65 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">Data Display</p>
    </div>
  );
}

function ButtonMargin3() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[2px] relative shrink-0 w-full" data-name="Button:margin">
      <Button8 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col h-[156px] items-start pt-[20px] relative shrink-0 w-[199px]" data-name="Container">
      <Paragraph22 />
      <ButtonMargin1 />
      <ButtonMargin2 />
      <ButtonMargin3 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Patterns</p>
    </div>
  );
}

function Text66() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">⊕</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text66 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">{`Patterns & Layouts`}</p>
    </div>
  );
}

function ButtonMargin4() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[6px] relative shrink-0 w-full" data-name="Button:margin">
      <Button9 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col h-[78px] items-start pt-[20px] relative shrink-0 w-[199px]" data-name="Container">
      <Paragraph23 />
      <ButtonMargin4 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Reference</p>
    </div>
  );
}

function Text67() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">⊛</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text67 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">{`Accessibility & Quick Ref`}</p>
    </div>
  );
}

function ButtonMargin5() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[6px] relative shrink-0 w-full" data-name="Button:margin">
      <Button10 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col h-[98px] items-start py-[20px] relative shrink-0 w-[199px]" data-name="Container">
      <Paragraph24 />
      <ButtonMargin5 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-[539.5_0_0] flex-col items-start min-h-px overflow-clip px-[12px] py-[16px] relative w-full" data-name="Navigation">
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.875px] not-italic relative shrink-0 text-[#99a1af] text-[11px] w-[183px]">Built with Inter · Teal + Navy palette · WCAG AA compliant</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="border-[#e5e7eb] border-solid border-t content-stretch flex flex-col items-start px-[20px] py-[16px] relative shrink-0 w-full" data-name="Container">
      <Paragraph25 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#fafafa] border-[#e5e7eb] border-r border-solid content-stretch flex flex-col h-[710px] items-start left-0 top-0 w-[224px]" data-name="Sidebar">
      <Container30 />
      <Navigation />
      <Container38 />
    </div>
  );
}

function Text68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">Design System</p>
    </div>
  );
}

function Text69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#d1d5dc] text-[11px] whitespace-nowrap">/</p>
    </div>
  );
}

function Text70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#1e2939] text-[13px] whitespace-nowrap">Form Fields</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Text68 />
      <Text69 />
      <Text70 />
    </div>
  );
}

function Text72() {
  return <div className="bg-[#0d9488] relative rounded-[16777200px] shrink-0 size-[6px]" data-name="Text" />;
}

function Text71() {
  return (
    <div className="bg-[#f0fdfa] border border-[#99f6e4] border-solid content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="Text">
      <Text72 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#0f766e] text-[11px] whitespace-nowrap">v1.0.0 · Claimora DS</p>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.9)] border-[#e5e7eb] border-b border-solid content-stretch flex h-[56px] items-center justify-between left-[224px] px-[32px] top-0 w-[905px]" data-name="TopBar">
      <Container39 />
      <Text71 />
    </div>
  );
}

export default function CreateDesignSystemForFigma() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start relative size-full" data-name="Create Design System for Figma">
      <App />
      <Sidebar />
      <TopBar />
    </div>
  );
}