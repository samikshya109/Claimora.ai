import svgPaths from "./svg-w85oopndyw";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] tracking-[-0.6px] whitespace-nowrap">Button</p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0" data-name="Paragraph:margin">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-[672px]">Buttons trigger actions. Use the correct variant to communicate intent: Primary for the primary action per view, Secondary for alternatives, Tertiary for low-emphasis, Destructive for irreversible actions.</p>
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Variants</p>
    </div>
  );
}

function DsButton() {
  return (
    <div className="bg-[#0d9488] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Primary</p>
    </div>
  );
}

function DsButton1() {
  return (
    <div className="bg-white border-2 border-[#0a1628] border-solid content-stretch flex h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#0a1628] text-[13px] text-center whitespace-nowrap">Secondary</p>
    </div>
  );
}

function DsButton2() {
  return (
    <div className="bg-[#f0fdfa] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#0d9488] text-[13px] text-center whitespace-nowrap">Tertiary</p>
    </div>
  );
}

function DsButton3() {
  return (
    <div className="bg-[#d4183d] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Destructive</p>
    </div>
  );
}

function DsButton4() {
  return (
    <div className="border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#374151] text-[13px] text-center whitespace-nowrap">Ghost</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[16px] h-[110px] items-center p-[32px] relative rounded-[12px] shrink-0 w-[832px]" data-name="Container">
      <DsButton />
      <DsButton1 />
      <DsButton2 />
      <DsButton3 />
      <DsButton4 />
    </div>
  );
}

function PreviewBoxMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="PreviewBox:margin">
      <Container />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[13px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[13px] whitespace-nowrap">ℹ</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[12px] w-[784px]">Use only one Primary button per view area. Stacking multiple primaries creates visual hierarchy confusion. When two actions share equal weight, use Primary + Secondary pairing.</p>
    </div>
  );
}

function Note() {
  return (
    <div className="bg-[#eff6ff] border border-[#bedbff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text />
      <Paragraph />
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

function Text1() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[15px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#5d0ec0] text-[13px] whitespace-nowrap">◈</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#5d0ec0] text-[0px] w-[781px]">
        <span className="leading-[19.5px] text-[12px]">Edge case — destructive confirmation:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` Destructive buttons should always be preceded by a confirmation dialog (e.g. "Delete agent? This cannot be undone."). Never place Destructive adjacent to Primary — add at least 24px gap or a visual separator.`}</span>
      </p>
    </div>
  );
}

function Note1() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text1 />
      <Paragraph1 />
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

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Button.tsx</p>
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

function Container1() {
  return (
    <div className="bg-[#f3f4f6] border-[#e5e7eb] border-b border-solid content-stretch flex items-center justify-between px-[12px] py-[6px] relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Button />
    </div>
  );
}

function CodeBlock1() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[149px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-name="Code Block">
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0">{`// Variant usage`}</p>
        <p className="leading-[19.5px] mb-0">{`<Button variant="primary">Run Agent</Button>`}</p>
        <p className="leading-[19.5px] mb-0">{`<Button variant="secondary">Cancel</Button>`}</p>
        <p className="leading-[19.5px] mb-0">{`<Button variant="tertiary">View Details</Button>`}</p>
        <p className="leading-[19.5px] mb-0">{`<Button variant="destructive">Delete</Button>`}</p>
        <p className="leading-[19.5px]">{`<Button variant="ghost">Dismiss</Button>`}</p>
      </div>
    </div>
  );
}

function CodeBlock() {
  return (
    <div className="border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[180.5px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="CodeBlock">
      <Container1 />
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
      <PreviewBoxMargin />
      <NoteMargin />
      <NoteMargin1 />
      <CodeBlockMargin />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Sizes</p>
    </div>
  );
}

function DsButton5() {
  return (
    <div className="bg-[#0d9488] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex h-[32px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Small</p>
    </div>
  );
}

function ButtonsSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="ButtonsSection">
      <DsButton5 />
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#99a1af] text-[10px] whitespace-nowrap">sm · h-32px</p>
    </div>
  );
}

function DsButton6() {
  return (
    <div className="bg-[#0d9488] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Medium</p>
    </div>
  );
}

function ButtonsSection2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="ButtonsSection">
      <DsButton6 />
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#99a1af] text-[10px] whitespace-nowrap">md · h-44px</p>
    </div>
  );
}

function DsButton7() {
  return (
    <div className="bg-[#0d9488] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex h-[48px] items-center justify-center px-[24px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Large</p>
    </div>
  );
}

function ButtonsSection3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="ButtonsSection">
      <DsButton7 />
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#99a1af] text-[10px] whitespace-nowrap">lg · h-48px</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[16px] h-[133px] items-center p-[32px] relative rounded-[12px] shrink-0 w-[832px]" data-name="Container">
      <ButtonsSection1 />
      <ButtonsSection2 />
      <ButtonsSection3 />
    </div>
  );
}

function PreviewBoxMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="PreviewBox:margin">
      <Container2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Size</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Height</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Padding</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Font</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid grid grid-cols-[____199.50px_199.50px_199.50px_199.50px] grid-rows-[_16.50px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
      <Text5 />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">sm</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">32px</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">0 12px</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">12px/500</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[____199.50px_199.50px_199.50px_199.50px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Text8 />
      <Text9 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">md</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">44px</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">0 16px</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">13px/500</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[____199.50px_199.50px_199.50px_199.50px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text11 />
      <Text12 />
      <Text13 />
      <Text14 />
    </div>
  );
}

function Text15() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">lg</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">48px</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">0 24px</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">14px/500</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="grid grid-cols-[____199.50px_199.50px_199.50px_199.50px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text15 />
      <Text16 />
      <Text17 />
      <Text18 />
    </div>
  );
}

function ButtonsSection4() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="ButtonsSection">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function ButtonsSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="ButtonsSection:margin">
      <ButtonsSection4 />
    </div>
  );
}

function SubSection1() {
  return (
    <div className="content-stretch flex flex-col h-[368.5px] items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading2 />
      <PreviewBoxMargin1 />
      <ButtonsSectionMargin />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">States — Primary</p>
    </div>
  );
}

function DsButton8() {
  return (
    <div className="bg-[#0d9488] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Default</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <DsButton8 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">Default</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0f766e] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Hover</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Button1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">Hover (simulate)</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#115e59] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Active</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Button2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">Active (simulate)</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute flex items-center justify-center left-[-2.93px] size-[21.86px] top-[-2.93px]">
      <div className="flex-none rotate-[59.97deg]">
        <div className="relative size-[16px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
            <g clipPath="url(#clip0_0_20)" id="Icon">
              <path d={svgPaths.p39ee6532} id="Vector" stroke="white" strokeOpacity="0.25" strokeWidth="2" />
              <path d={svgPaths.p38eb5460} id="Vector_2" stroke="white" strokeLinecap="round" strokeWidth="2" />
            </g>
            <defs>
              <clipPath id="clip0_0_20">
                <rect fill="white" height="16" width="16" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconTransform() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[16px]" data-name="Icon:transform">
      <Icon />
    </div>
  );
}

function DsButton9() {
  return (
    <div className="bg-[#0d9488] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center opacity-40 px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <IconTransform />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Loading</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <DsButton9 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">Loading</p>
    </div>
  );
}

function DsButton10() {
  return (
    <div className="bg-[#0d9488] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex h-[44px] items-center justify-center opacity-40 px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Disabled</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="col-5 content-stretch flex flex-col gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <DsButton10 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">Disabled</p>
    </div>
  );
}

function ButtonsSection5() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____156.80px_156.80px_156.80px_156.80px_156.80px] grid-rows-[_68.50px] relative shrink-0 w-full" data-name="ButtonsSection">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function ButtonsSectionMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="ButtonsSection:margin">
      <ButtonsSection5 />
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[13px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[13px] whitespace-nowrap">ℹ</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[12px] w-[784px]">Disabled state uses 40% opacity on the button itself — do not change colors, only reduce opacity. This preserves the visual variant identity while communicating unavailability.</p>
    </div>
  );
}

function Note2() {
  return (
    <div className="bg-[#eff6ff] border border-[#bedbff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text19 />
      <Paragraph2 />
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

function Text20() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[15px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#5d0ec0] text-[13px] whitespace-nowrap">◈</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#5d0ec0] text-[0px] w-[781px]">
        <span className="leading-[19.5px] text-[12px]">Edge case — loading state:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` While loading, the button becomes non-interactive (pointer-events: none). Always preserve the button's width during loading to prevent layout shift. Use min-width or fixed width on containers.`}</span>
      </p>
    </div>
  );
}

function Note3() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text20 />
      <Paragraph3 />
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

function Text21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">{`Button.tsx — loading & disabled`}</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#00786f] text-[11px] text-center whitespace-nowrap">Copy</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f3f4f6] border-[#e5e7eb] border-b border-solid content-stretch flex items-center justify-between px-[12px] py-[6px] relative shrink-0 w-full" data-name="Container">
      <Text21 />
      <Button3 />
    </div>
  );
}

function CodeBlock3() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[266px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-name="Code Block">
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Loading state — show spinner, keep label`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Button variant="primary" loading>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  Saving...`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`</Button>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Disabled — opacity 40%, non-interactive`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Button variant="primary" disabled>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  Run Agent`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`</Button>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Focus ring — required for keyboard navigation`}</p>
        <p className="leading-[19.5px] whitespace-pre">{`// Automatically applied via focus-visible:ring-2`}</p>
      </div>
    </div>
  );
}

function CodeBlock2() {
  return (
    <div className="border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[297.5px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="CodeBlock">
      <Container12 />
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
      <ButtonsSectionMargin1 />
      <NoteMargin2 />
      <NoteMargin3 />
      <CodeBlockMargin1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">States — Secondary</p>
    </div>
  );
}

function DsButton11() {
  return (
    <div className="bg-white border-2 border-[#0a1628] border-solid content-stretch flex h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#0a1628] text-[13px] text-center whitespace-nowrap">Default</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <DsButton11 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">Default</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#0a1628] border-2 border-[#0a1628] border-solid content-stretch flex h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Hover</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Button4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">Hover (simulate)</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#0f1f3d] border-2 border-[#0f1f3d] border-solid content-stretch flex h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Active</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Button5 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">Active (simulate)</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute flex items-center justify-center left-[-2.93px] size-[21.86px] top-[-2.93px]">
      <div className="flex-none rotate-[59.97deg]">
        <div className="relative size-[16px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
            <g clipPath="url(#clip0_0_15)" id="Icon">
              <path d={svgPaths.p39ee6532} id="Vector" stroke="#0A1628" strokeOpacity="0.25" strokeWidth="2" />
              <path d={svgPaths.p38eb5460} id="Vector_2" stroke="#0A1628" strokeLinecap="round" strokeWidth="2" />
            </g>
            <defs>
              <clipPath id="clip0_0_15">
                <rect fill="white" height="16" width="16" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconTransform1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[16px]" data-name="Icon:transform">
      <Icon1 />
    </div>
  );
}

function DsButton12() {
  return (
    <div className="bg-white border-2 border-[#0a1628] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center opacity-40 px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <IconTransform1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#0a1628] text-[13px] text-center whitespace-nowrap">Loading</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <DsButton12 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">Loading</p>
    </div>
  );
}

function DsButton13() {
  return (
    <div className="bg-white border-2 border-[#0a1628] border-solid content-stretch flex h-[44px] items-center justify-center opacity-40 px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#0a1628] text-[13px] text-center whitespace-nowrap">Disabled</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="col-5 content-stretch flex flex-col gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <DsButton13 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">Disabled</p>
    </div>
  );
}

function ButtonsSection6() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____156.80px_156.80px_156.80px_156.80px_156.80px] grid-rows-[_68.50px] relative shrink-0 w-full" data-name="ButtonsSection">
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function ButtonsSectionMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="ButtonsSection:margin">
      <ButtonsSection6 />
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Background</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#FFFFFF</p>
    </div>
  );
}

function SpecRow() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Text color</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#0A1628</p>
    </div>
  );
}

function SpecRow1() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text24 />
      <Text25 />
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#0A1628</p>
    </div>
  );
}

function SpecRow2() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text26 />
      <Text27 />
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Hover state</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">bg:#0A1628, text:#FFF</p>
    </div>
  );
}

function SpecRow3() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text28 />
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Height (md)</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">44px</p>
    </div>
  );
}

function SpecRow4() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text30 />
      <Text31 />
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Padding (md)</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">0 16px</p>
    </div>
  );
}

function SpecRow5() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text32 />
      <Text33 />
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Font size (md)</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">13px / 500</p>
    </div>
  );
}

function SpecRow6() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text34 />
      <Text35 />
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border radius</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">8px</p>
    </div>
  );
}

function SpecRow7() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text36 />
      <Text37 />
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border width</p>
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">2px</p>
    </div>
  );
}

function SpecRow8() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text38 />
      <Text39 />
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Transition</p>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">150ms ease</p>
    </div>
  );
}

function SpecRow9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text40 />
      <Text41 />
    </div>
  );
}

function BtnSpecTable() {
  return (
    <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="BtnSpecTable">
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
    </div>
  );
}

function SubSection3() {
  return (
    <div className="content-stretch flex flex-col h-[499.5px] items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading4 />
      <ButtonsSectionMargin2 />
      <BtnSpecTable />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">With Icons</p>
    </div>
  );
}

function PlusIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="PlusIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_10)" id="PlusIcon">
          <path d="M7 1V13M1 7H13" id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_10">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DsButton14() {
  return (
    <div className="bg-[#0d9488] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <PlusIcon />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">New Agent</p>
    </div>
  );
}

function PlusIcon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="PlusIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_4)" id="PlusIcon">
          <path d="M7 1V13M1 7H13" id="Vector" stroke="#0A1628" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DsButton15() {
  return (
    <div className="bg-white border-2 border-[#0a1628] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <PlusIcon1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#0a1628] text-[13px] text-center whitespace-nowrap">Add Task</p>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ArrowRightIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="ArrowRightIcon">
          <path d="M2 7H12M8 11L12 7L8 3" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function DsButton16() {
  return (
    <div className="bg-[#0d9488] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Continue</p>
      <ArrowRightIcon />
    </div>
  );
}

function TrashIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="TrashIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="TrashIcon">
          <path d={svgPaths.p25ea5480} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function DsButton17() {
  return (
    <div className="bg-[#d4183d] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <TrashIcon />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Delete</p>
    </div>
  );
}

function PlusIcon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="PlusIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_6)" id="PlusIcon">
          <path d="M7 1V13M1 7H13" id="Vector" stroke="#374151" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DsButton18() {
  return (
    <div className="border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <PlusIcon2 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#374151] text-[13px] text-center whitespace-nowrap">Add</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[16px] h-[110px] items-center p-[32px] relative rounded-[12px] shrink-0 w-[832px]" data-name="Container">
      <DsButton14 />
      <DsButton15 />
      <DsButton16 />
      <DsButton17 />
      <DsButton18 />
    </div>
  );
}

function PreviewBoxMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="PreviewBox:margin">
      <Container18 />
    </div>
  );
}

function Text42() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[13px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[13px] whitespace-nowrap">ℹ</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[12px] w-[784px]">Icons are always 14×14px inside buttons. Gap between icon and label is 8px. Icon-only buttons must have an aria-label and tooltip — never rely on icon recognition alone.</p>
    </div>
  );
}

function Note4() {
  return (
    <div className="bg-[#eff6ff] border border-[#bedbff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text42 />
      <Paragraph4 />
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

function Text43() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[15px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#5d0ec0] text-[13px] whitespace-nowrap">◈</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#5d0ec0] text-[0px] w-[781px]">
        <span className="leading-[19.5px] text-[12px]">Edge case — long labels:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` Button text must never wrap. If the label is longer than the container allows, truncate with ellipsis and use a tooltip showing the full text, or shorten the copy. Minimum touch target is 44×44px on mobile.`}</span>
      </p>
    </div>
  );
}

function Note5() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text43 />
      <Paragraph5 />
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

function Text44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Button.tsx — with icons</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#00786f] text-[11px] text-center whitespace-nowrap">Copy</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f3f4f6] border-[#e5e7eb] border-b border-solid content-stretch flex items-center justify-between px-[12px] py-[6px] relative shrink-0 w-full" data-name="Container">
      <Text44 />
      <Button6 />
    </div>
  );
}

function CodeBlock5() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[305px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-name="Code Block">
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Icon left`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Button variant="primary" iconLeft={<PlusIcon />}>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  New Agent`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`</Button>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Icon right`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Button variant="primary" iconRight={<ArrowRightIcon />}>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  Continue`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`</Button>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Icon only (must include aria-label)`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Button variant="ghost" aria-label="Add task" iconLeft={<PlusIcon />} />`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] whitespace-pre">{`// Spec: icon size 14×14px, gap 8px`}</p>
      </div>
    </div>
  );
}

function CodeBlock4() {
  return (
    <div className="border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[336.5px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="CodeBlock">
      <Container19 />
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
      <PreviewBoxMargin2 />
      <NoteMargin4 />
      <NoteMargin5 />
      <CodeBlockMargin2 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Full Spec Reference — Primary Button (md)</p>
    </div>
  );
}

function Text45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Background</p>
    </div>
  );
}

function Text46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#0D9488</p>
    </div>
  );
}

function SpecRow10() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text45 />
      <Text46 />
    </div>
  );
}

function Text47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Text color</p>
    </div>
  );
}

function Text48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#FFFFFF</p>
    </div>
  );
}

function SpecRow11() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text47 />
      <Text48 />
    </div>
  );
}

function Text49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border</p>
    </div>
  );
}

function Text50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">none</p>
    </div>
  );
}

function SpecRow12() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text49 />
      <Text50 />
    </div>
  );
}

function Text51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Hover state</p>
    </div>
  );
}

function Text52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#0F766E</p>
    </div>
  );
}

function SpecRow13() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text51 />
      <Text52 />
    </div>
  );
}

function Text53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Height (md)</p>
    </div>
  );
}

function Text54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">44px</p>
    </div>
  );
}

function SpecRow14() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text53 />
      <Text54 />
    </div>
  );
}

function Text55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Padding (md)</p>
    </div>
  );
}

function Text56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">0 16px</p>
    </div>
  );
}

function SpecRow15() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text55 />
      <Text56 />
    </div>
  );
}

function Text57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Font size (md)</p>
    </div>
  );
}

function Text58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">13px / 500</p>
    </div>
  );
}

function SpecRow16() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text57 />
      <Text58 />
    </div>
  );
}

function Text59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border radius</p>
    </div>
  );
}

function Text60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">8px</p>
    </div>
  );
}

function SpecRow17() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text59 />
      <Text60 />
    </div>
  );
}

function Text61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border width</p>
    </div>
  );
}

function Text62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">2px</p>
    </div>
  );
}

function SpecRow18() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text61 />
      <Text62 />
    </div>
  );
}

function Text63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Transition</p>
    </div>
  );
}

function Text64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">150ms ease</p>
    </div>
  );
}

function SpecRow19() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text63 />
      <Text64 />
    </div>
  );
}

function BtnSpecTable1() {
  return (
    <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="BtnSpecTable">
      <SpecRow10 />
      <SpecRow11 />
      <SpecRow12 />
      <SpecRow13 />
      <SpecRow14 />
      <SpecRow15 />
      <SpecRow16 />
      <SpecRow17 />
      <SpecRow18 />
      <SpecRow19 />
    </div>
  );
}

function BtnSpecTableMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="BtnSpecTable:margin">
      <BtnSpecTable1 />
    </div>
  );
}

function SubSection5() {
  return (
    <div className="content-stretch flex flex-col h-[431px] items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading6 />
      <BtnSpecTableMargin />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Full Spec Reference — Destructive Button (md)</p>
    </div>
  );
}

function Text65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Background</p>
    </div>
  );
}

function Text66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#D4183D</p>
    </div>
  );
}

function SpecRow20() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text65 />
      <Text66 />
    </div>
  );
}

function Text67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Text color</p>
    </div>
  );
}

function Text68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#FFFFFF</p>
    </div>
  );
}

function SpecRow21() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text67 />
      <Text68 />
    </div>
  );
}

function Text69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border</p>
    </div>
  );
}

function Text70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">none</p>
    </div>
  );
}

function SpecRow22() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text69 />
      <Text70 />
    </div>
  );
}

function Text71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Hover state</p>
    </div>
  );
}

function Text72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#B91C3E</p>
    </div>
  );
}

function SpecRow23() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text71 />
      <Text72 />
    </div>
  );
}

function Text73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Height (md)</p>
    </div>
  );
}

function Text74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">44px</p>
    </div>
  );
}

function SpecRow24() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text73 />
      <Text74 />
    </div>
  );
}

function Text75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Padding (md)</p>
    </div>
  );
}

function Text76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">0 16px</p>
    </div>
  );
}

function SpecRow25() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text75 />
      <Text76 />
    </div>
  );
}

function Text77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Font size (md)</p>
    </div>
  );
}

function Text78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">13px / 500</p>
    </div>
  );
}

function SpecRow26() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text77 />
      <Text78 />
    </div>
  );
}

function Text79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border radius</p>
    </div>
  );
}

function Text80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">8px</p>
    </div>
  );
}

function SpecRow27() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text79 />
      <Text80 />
    </div>
  );
}

function Text81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border width</p>
    </div>
  );
}

function Text82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">2px</p>
    </div>
  );
}

function SpecRow28() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text81 />
      <Text82 />
    </div>
  );
}

function Text83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Transition</p>
    </div>
  );
}

function Text84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">150ms ease</p>
    </div>
  );
}

function SpecRow29() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text83 />
      <Text84 />
    </div>
  );
}

function BtnSpecTable2() {
  return (
    <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="BtnSpecTable">
      <SpecRow20 />
      <SpecRow21 />
      <SpecRow22 />
      <SpecRow23 />
      <SpecRow24 />
      <SpecRow25 />
      <SpecRow26 />
      <SpecRow27 />
      <SpecRow28 />
      <SpecRow29 />
    </div>
  );
}

function BtnSpecTableMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="BtnSpecTable:margin">
      <BtnSpecTable2 />
    </div>
  );
}

function Text85() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[14px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#973c00] text-[13px] whitespace-nowrap">⚠</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#973c00] text-[12px] w-[780px]">WCAG 2.1: Destructive button (#D4183D on white) must have contrast ≥ 3:1 for large text or 4.5:1 for normal. Confirmed: #D4183D on white = 4.6:1 ✓. On Destructive bg (white text): white on #D4183D = 4.6:1 ✓.</p>
    </div>
  );
}

function Note6() {
  return (
    <div className="bg-[#fffbeb] border border-[#fee685] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text85 />
      <Paragraph6 />
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

function SubSection6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading7 />
      <BtnSpecTableMargin1 />
      <NoteMargin6 />
    </div>
  );
}

function ButtonsSection() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[896px] pb-[80px] pt-[40px] px-[32px] relative shrink-0 w-[896px]" data-name="ButtonsSection">
      <SectionHeader />
      <SubSection />
      <SubSection1 />
      <SubSection2 />
      <SubSection3 />
      <SubSection4 />
      <SubSection5 />
      <SubSection6 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-center pl-[224px] pt-[56px] relative shrink-0 w-full" data-name="App">
      <ButtonsSection />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_12)" id="Icon">
          <path d={svgPaths.p2add52c0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.6" />
          <path d={svgPaths.p2ee86900} fill="white" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_0_12">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#0d9488] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.25px] not-italic relative shrink-0 text-[#101828] text-[13px] whitespace-nowrap">Claimora</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] not-italic relative shrink-0 text-[#99a1af] text-[10px] whitespace-nowrap">Design System v1.0</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[92.117px]" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start p-[20px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Foundations</p>
    </div>
  );
}

function Text86() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">◈</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text86 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">Foundations</p>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[6px] relative shrink-0 w-full" data-name="Button:margin">
      <Button7 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph9 />
      <ButtonMargin />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Components</p>
    </div>
  );
}

function Text87() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0d9488] text-[14px] text-center whitespace-nowrap">⬡</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text87 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#0d9488] text-[13px] whitespace-nowrap">Button</p>
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[6px] relative shrink-0 w-full" data-name="Button:margin">
      <Button8 />
    </div>
  );
}

function Text88() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">⊟</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text88 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">Form Fields</p>
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[2px] relative shrink-0 w-full" data-name="Button:margin">
      <Button9 />
    </div>
  );
}

function Text89() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">⊞</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text89 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">Data Display</p>
    </div>
  );
}

function ButtonMargin3() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[2px] relative shrink-0 w-full" data-name="Button:margin">
      <Button10 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col h-[156px] items-start pt-[20px] relative shrink-0 w-[199px]" data-name="Container">
      <Paragraph10 />
      <ButtonMargin1 />
      <ButtonMargin2 />
      <ButtonMargin3 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Patterns</p>
    </div>
  );
}

function Text90() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">⊕</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text90 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">{`Patterns & Layouts`}</p>
    </div>
  );
}

function ButtonMargin4() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[6px] relative shrink-0 w-full" data-name="Button:margin">
      <Button11 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col h-[78px] items-start pt-[20px] relative shrink-0 w-[199px]" data-name="Container">
      <Paragraph11 />
      <ButtonMargin4 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Reference</p>
    </div>
  );
}

function Text91() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">⊛</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text91 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">{`Accessibility & Quick Ref`}</p>
    </div>
  );
}

function ButtonMargin5() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[6px] relative shrink-0 w-full" data-name="Button:margin">
      <Button12 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col h-[98px] items-start py-[20px] relative shrink-0 w-[199px]" data-name="Container">
      <Paragraph12 />
      <ButtonMargin5 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-[539.5_0_0] flex-col items-start min-h-px overflow-clip px-[12px] py-[16px] relative w-full" data-name="Navigation">
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.875px] not-italic relative shrink-0 text-[#99a1af] text-[11px] w-[183px]">Built with Inter · Teal + Navy palette · WCAG AA compliant</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="border-[#e5e7eb] border-solid border-t content-stretch flex flex-col items-start px-[20px] py-[16px] relative shrink-0 w-full" data-name="Container">
      <Paragraph13 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#fafafa] border-[#e5e7eb] border-r border-solid content-stretch flex flex-col h-[710px] items-start left-0 top-0 w-[224px]" data-name="Sidebar">
      <Container20 />
      <Navigation />
      <Container28 />
    </div>
  );
}

function Text92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">Design System</p>
    </div>
  );
}

function Text93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#d1d5dc] text-[11px] whitespace-nowrap">/</p>
    </div>
  );
}

function Text94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#1e2939] text-[13px] whitespace-nowrap">Button</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Text92 />
      <Text93 />
      <Text94 />
    </div>
  );
}

function Text96() {
  return <div className="bg-[#0d9488] relative rounded-[16777200px] shrink-0 size-[6px]" data-name="Text" />;
}

function Text95() {
  return (
    <div className="bg-[#f0fdfa] border border-[#99f6e4] border-solid content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="Text">
      <Text96 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#0f766e] text-[11px] whitespace-nowrap">v1.0.0 · Claimora DS</p>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.9)] border-[#e5e7eb] border-b border-solid content-stretch flex h-[56px] items-center justify-between left-[224px] px-[32px] top-0 w-[905px]" data-name="TopBar">
      <Container29 />
      <Text95 />
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