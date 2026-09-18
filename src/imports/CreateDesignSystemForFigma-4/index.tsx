import svgPaths from "./svg-wz3hp20891";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] tracking-[-0.6px] whitespace-nowrap">{`Patterns & Layouts`}</p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0" data-name="Paragraph:margin">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-[672px]">Composed interaction patterns used across the Agentic AI interface: upload areas, modals, tooltips, tabs, data rows, and page-level layouts.</p>
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">File Upload</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">Full Drop Zone</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p10b5bb00} id="Vector" stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#cbfbf1] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
      <Icon />
    </div>
  );
}

function UploadArea() {
  return (
    <div className="bg-[#f9fafb] border-2 border-[#d1d5dc] border-dashed content-stretch flex flex-col gap-[12px] h-[160px] items-center justify-center min-h-[160px] relative rounded-[12px] shrink-0 w-[404px]" data-name="UploadArea">
      <Container1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">
        <span className="leading-[21px]">{`Drop files here or `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[21px] text-[#009689] underline">browse</span>
      </p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">PDF, DOCX, TXT — max 50MB</p>
    </div>
  );
}

function UploadAreaMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="UploadArea:margin">
      <UploadArea />
    </div>
  );
}

function Container() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph />
      <UploadAreaMargin />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col h-[29px] items-start pb-[12px] relative shrink-0 w-[404px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">Compact Button</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M8 1V11M12 5L8 1L4 5M2 13H14" id="Vector" stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">Upload file</p>
    </div>
  );
}

function UploadArea1() {
  return (
    <div className="absolute border-2 border-[#d1d5dc] border-dashed content-stretch flex gap-[8px] h-[44px] items-center left-0 px-[16px] rounded-[8px] top-0" data-name="UploadArea">
      <Icon1 />
      <Text />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="Container">
      <UploadArea1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph1 />
      <Container3 />
    </div>
  );
}

function PatternsSection1() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[__404px_404px] grid-rows-[_188.50px] relative shrink-0 w-full" data-name="PatternsSection">
      <Container />
      <Container2 />
    </div>
  );
}

function PatternsSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="PatternsSection:margin">
      <PatternsSection1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] w-[112px]">Drop zone min-height</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">160px</p>
    </div>
  );
}

function SpecRow() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">2px dashed #D1D5DB</p>
    </div>
  );
}

function SpecRow1() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] w-[112px]">Border (hover/drag)</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">2px dashed #0D9488</p>
    </div>
  );
}

function SpecRow2() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Bg (drag-over)</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#F0FDFA (Teal/50)</p>
    </div>
  );
}

function SpecRow3() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Icon container</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">40×40px / rounded-full / Teal/100 bg</p>
    </div>
  );
}

function SpecRow4() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Icon color</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#0D9488</p>
    </div>
  );
}

function SpecRow5() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border radius</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">12px</p>
    </div>
  );
}

function SpecRow6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text13 />
      <Text14 />
    </div>
  );
}

function PatternsSection2() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="PatternsSection">
      <SpecRow />
      <SpecRow1 />
      <SpecRow2 />
      <SpecRow3 />
      <SpecRow4 />
      <SpecRow5 />
      <SpecRow6 />
    </div>
  );
}

function PatternsSectionMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="PatternsSection:margin">
      <PatternsSection2 />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[15px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#5d0ec0] text-[13px] whitespace-nowrap">◈</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#5d0ec0] text-[0px] w-[781px]">
        <span className="leading-[19.5px] text-[12px]">Edge case — file size exceeded:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` After file selection, validate size before showing progress. If over limit, show: Alert variant="error" with "File exceeds 50MB limit." — never silently reject.`}</span>
      </p>
    </div>
  );
}

function Note() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text15 />
      <Paragraph2 />
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

function Text16() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[15px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#5d0ec0] text-[13px] whitespace-nowrap">◈</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#5d0ec0] text-[0px] w-[781px]">
        <span className="leading-[19.5px] text-[12px]">Edge case — wrong file type:</span>
        <span className="font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` Reject on drop with an inline error message in the drop zone. The border turns error red (#D4183D) and the icon changes to ✕.`}</span>
      </p>
    </div>
  );
}

function Note1() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text16 />
      <Paragraph3 />
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

function Text17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">UploadArea.tsx</p>
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

function Container4() {
  return (
    <div className="bg-[#f3f4f6] border-[#e5e7eb] border-b border-solid content-stretch flex items-center justify-between px-[12px] py-[6px] relative shrink-0 w-full" data-name="Container">
      <Text17 />
      <Button />
    </div>
  );
}

function CodeBlock1() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[207.5px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-name="Code Block">
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Full drop zone`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<UploadArea`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  accept=".pdf,.docx,.txt"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  maxSizeMB={50}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  onUpload={(file) => handleFile(file)}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`/>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Compact button trigger`}</p>
        <p className="leading-[19.5px] whitespace-pre">{`<UploadArea compact onUpload={(file) => handleFile(file)} />`}</p>
      </div>
    </div>
  );
}

function CodeBlock() {
  return (
    <div className="border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[239px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="CodeBlock">
      <Container4 />
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
      <PatternsSectionMargin />
      <PatternsSectionMargin1 />
      <NoteMargin />
      <NoteMargin1 />
      <CodeBlockMargin />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">{`Modal & Confirmation Dialog`}</p>
    </div>
  );
}

function DsButton() {
  return (
    <div className="bg-white border-2 border-[#0a1628] border-solid content-stretch flex h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#0a1628] text-[13px] text-center whitespace-nowrap">Open Form Modal</p>
    </div>
  );
}

function DsButton1() {
  return (
    <div className="bg-[#d4183d] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex h-[44px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Open Confirm Dialog</p>
    </div>
  );
}

function ModalDemo() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="ModalDemo">
      <DsButton />
      <DsButton1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex h-[110px] items-center p-[32px] relative rounded-[12px] shrink-0 w-[832px]" data-name="Container">
      <ModalDemo />
    </div>
  );
}

function PreviewBoxMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="PreviewBox:margin">
      <Container5 />
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Backdrop</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">rgba(0,0,0,0.5)</p>
    </div>
  );
}

function SpecRow7() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Modal bg</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#FFFFFF</p>
    </div>
  );
}

function SpecRow8() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border radius</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">12px</p>
    </div>
  );
}

function SpecRow9() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Max-width (form)</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">448px</p>
    </div>
  );
}

function SpecRow10() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] w-[112px]">Max-width (confirm)</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">384px</p>
    </div>
  );
}

function SpecRow11() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Header font</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">17px / 600 / #111827</p>
    </div>
  );
}

function SpecRow12() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Header border</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">1px solid #E5E7EB</p>
    </div>
  );
}

function SpecRow13() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Footer bg</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#F9FAFB</p>
    </div>
  );
}

function SpecRow14() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Footer border</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">1px solid #F3F4F6</p>
    </div>
  );
}

function SpecRow15() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Close button</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">32×32px / rounded-lg / hover:#F3F4F6</p>
    </div>
  );
}

function SpecRow16() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Shadow</p>
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">0 8px 32px rgba(0,0,0,0.3)</p>
    </div>
  );
}

function SpecRow17() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Z-index</p>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">50</p>
    </div>
  );
}

function SpecRow18() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text40 />
      <Text41 />
    </div>
  );
}

function PatternsSection3() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="PatternsSection">
      <SpecRow7 />
      <SpecRow8 />
      <SpecRow9 />
      <SpecRow10 />
      <SpecRow11 />
      <SpecRow12 />
      <SpecRow13 />
      <SpecRow14 />
      <SpecRow15 />
      <SpecRow16 />
      <SpecRow17 />
      <SpecRow18 />
    </div>
  );
}

function PatternsSectionMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="PatternsSection:margin">
      <PatternsSection3 />
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[12px] w-[784px]">Form modals: max-width 448px, scrollable body (max-height: 70vh, overflow-y: auto). Confirm dialogs: max-width 384px, never scroll. Close on backdrop click (form modals only — not confirms, as accidental close would be destructive).</p>
    </div>
  );
}

function Note2() {
  return (
    <div className="bg-[#eff6ff] border border-[#bedbff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text42 />
      <Paragraph4 />
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
        <span className="leading-[19.5px] text-[12px]">Edge case — keyboard focus trap:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` When a modal opens, focus must be trapped inside it. Tab cycles through interactive elements only within the modal. Escape key closes the modal unless it's a destructive confirm dialog.`}</span>
      </p>
    </div>
  );
}

function Note3() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text43 />
      <Paragraph5 />
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

function Text44() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[15px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#5d0ec0] text-[13px] whitespace-nowrap">◈</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#5d0ec0] text-[0px] w-[781px]">
        <span className="leading-[19.5px] text-[12px]">Edge case — content overflow:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` If the modal body content exceeds 70vh, the body scrolls independently while header and footer stay fixed. Apply overflow-y: auto to the body div, not the modal container.`}</span>
      </p>
    </div>
  );
}

function Note4() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text44 />
      <Paragraph6 />
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

function Text45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Modal.tsx</p>
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

function Container6() {
  return (
    <div className="bg-[#f3f4f6] border-[#e5e7eb] border-b border-solid content-stretch flex items-center justify-between px-[12px] py-[6px] relative shrink-0 w-full" data-name="Container">
      <Text45 />
      <Button1 />
    </div>
  );
}

function CodeBlock3() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[500px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-name="Code Block">
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Form modal`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Modal`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  open={isOpen}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  onClose={() => setOpen(false)}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  title="Configure Agent"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  footer={`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`    <>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`      <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`      <Button variant="primary">Save</Button>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`    </>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  }`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  {/* form content */}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`</Modal>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Confirm dialog — no backdrop-click-to-close`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<ConfirmDialog`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  open={confirmOpen}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  variant="destructive"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  title="Delete agent?"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  description="This cannot be undone."`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  onConfirm={handleDelete}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  onCancel={() => setConfirmOpen(false)}`}</p>
        <p className="leading-[19.5px] whitespace-pre">{`/>`}</p>
      </div>
    </div>
  );
}

function CodeBlock2() {
  return (
    <div className="border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[531.5px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="CodeBlock">
      <Container6 />
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

function SubSection1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading2 />
      <PreviewBoxMargin />
      <PatternsSectionMargin2 />
      <NoteMargin2 />
      <NoteMargin3 />
      <NoteMargin4 />
      <CodeBlockMargin1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Tooltip</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="border-2 border-[#e5e7eb] border-solid h-[36px] relative rounded-[8px] shrink-0 w-[95.813px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[46px] not-italic text-[#4a5565] text-[13px] text-center top-[7.25px] whitespace-nowrap">Hover me</p>
    </div>
  );
}

function Text46() {
  return <div className="bg-[#d4183d] relative rounded-[16777200px] shrink-0 size-[6px]" data-name="Text" />;
}

function DsBadge() {
  return (
    <div className="absolute bg-[#fee2e2] border border-[#fecaca] border-solid content-stretch flex gap-[6px] h-[28px] items-center left-0 px-[12px] py-[4px] rounded-[16777200px] top-[0.5px]" data-name="DSBadge">
      <Text46 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#991b1b] text-[12px] whitespace-nowrap">Failed</p>
    </div>
  );
}

function PatternsSection4() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[72.141px]" data-name="PatternsSection">
      <DsBadge />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[16px] h-[102px] items-center p-[32px] relative rounded-[12px] shrink-0 w-[832px]" data-name="Container">
      <Button2 />
      <PatternsSection4 />
    </div>
  );
}

function PreviewBoxMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="PreviewBox:margin">
      <Container7 />
    </div>
  );
}

function Text47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Background</p>
    </div>
  );
}

function Text48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#111827 (Gray/900)</p>
    </div>
  );
}

function SpecRow19() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Text color</p>
    </div>
  );
}

function Text50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#FFFFFF</p>
    </div>
  );
}

function SpecRow20() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Font</p>
    </div>
  );
}

function Text52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">11–12px / 500</p>
    </div>
  );
}

function SpecRow21() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Padding</p>
    </div>
  );
}

function Text54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">6px 12px</p>
    </div>
  );
}

function SpecRow22() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border radius</p>
    </div>
  );
}

function Text56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">8px</p>
    </div>
  );
}

function SpecRow23() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Arrow size</p>
    </div>
  );
}

function Text58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">8×8px rotated 45°</p>
    </div>
  );
}

function SpecRow24() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Appear delay</p>
    </div>
  );
}

function Text60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">300ms</p>
    </div>
  );
}

function SpecRow25() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Z-index</p>
    </div>
  );
}

function Text62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">50</p>
    </div>
  );
}

function SpecRow26() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Max-width</p>
    </div>
  );
}

function Text64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">240px</p>
    </div>
  );
}

function SpecRow27() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text63 />
      <Text64 />
    </div>
  );
}

function PatternsSection5() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="PatternsSection">
      <SpecRow19 />
      <SpecRow20 />
      <SpecRow21 />
      <SpecRow22 />
      <SpecRow23 />
      <SpecRow24 />
      <SpecRow25 />
      <SpecRow26 />
      <SpecRow27 />
    </div>
  );
}

function PatternsSectionMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="PatternsSection:margin">
      <PatternsSection5 />
    </div>
  );
}

function Text65() {
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
        <span className="leading-[19.5px] text-[12px]">Edge case — tooltip near viewport edge:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` Tooltip must reposition (flip direction) when it would overflow the viewport. Top-preferred; fall back to bottom, then side. Always keep the tooltip within 8px of the viewport edge.`}</span>
      </p>
    </div>
  );
}

function Note5() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text65 />
      <Paragraph7 />
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

function Text66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Tooltip.tsx</p>
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

function Container8() {
  return (
    <div className="bg-[#f3f4f6] border-[#e5e7eb] border-b border-solid content-stretch flex items-center justify-between px-[12px] py-[6px] relative shrink-0 w-full" data-name="Container">
      <Text66 />
      <Button3 />
    </div>
  );
}

function CodeBlock5() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[188px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-name="Code Block">
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Tooltip content="Run this agent immediately" position="top">`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  <Button variant="primary">Run</Button>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`</Tooltip>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// On any element`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Tooltip content="Model API returned 503 — retry in 30s">`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  <Badge variant="error" dot>Failed</Badge>`}</p>
        <p className="leading-[19.5px] whitespace-pre">{`</Tooltip>`}</p>
      </div>
    </div>
  );
}

function CodeBlock4() {
  return (
    <div className="border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[219.5px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="CodeBlock">
      <Container8 />
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

function SubSection2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading3 />
      <PreviewBoxMargin1 />
      <PatternsSectionMargin3 />
      <NoteMargin5 />
      <CodeBlockMargin2 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Tab Navigation</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute border-[#0d9488] border-b-2 border-solid content-stretch flex flex-col h-[41.5px] items-center justify-center left-0 px-[16px] py-[10px] top-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#0d9488] text-[13px] text-center whitespace-nowrap">Overview</p>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[91px]" data-name="Button:margin">
      <Button4 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid content-stretch flex flex-col h-[41.5px] items-center justify-center left-0 px-[16px] py-[10px] top-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#6a7282] text-[13px] text-center whitespace-nowrap">Agents</p>
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[77px]" data-name="Button:margin">
      <Button5 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid content-stretch flex flex-col h-[41.5px] items-center justify-center left-0 px-[16px] py-[10px] top-0 w-[89.211px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#6a7282] text-[13px] text-center whitespace-nowrap">Evidence</p>
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[89.211px]" data-name="Button:margin">
      <Button6 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid content-stretch flex flex-col h-[41.5px] items-center justify-center left-0 px-[16px] py-[10px] top-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#6a7282] text-[13px] text-center whitespace-nowrap">Tasks</p>
    </div>
  );
}

function ButtonMargin3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[69px]" data-name="Button:margin">
      <Button7 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid content-stretch flex flex-col h-[41.5px] items-center justify-center left-0 px-[16px] py-[10px] top-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#6a7282] text-[13px] text-center whitespace-nowrap">Settings</p>
    </div>
  );
}

function ButtonMargin4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[84px]" data-name="Button:margin">
      <Button8 />
    </div>
  );
}

function TabBar() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex h-[41.5px] items-start relative shrink-0 w-full" data-name="TabBar">
      <ButtonMargin />
      <ButtonMargin1 />
      <ButtonMargin2 />
      <ButtonMargin3 />
      <ButtonMargin4 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start pt-[20px] relative shrink-0 w-[782px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6a7282] text-[13px] whitespace-nowrap">Tab content renders here. Use tabs to organize related views within a single context — not for primary navigation.</p>
    </div>
  );
}

function PatternsSection6() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start p-[24px] relative rounded-[12px] shrink-0 w-full" data-name="PatternsSection">
      <TabBar />
      <Paragraph8 />
    </div>
  );
}

function PatternsSectionMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="PatternsSection:margin">
      <PatternsSection6 />
    </div>
  );
}

function Text67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Tab height</p>
    </div>
  );
}

function Text68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">44px</p>
    </div>
  );
}

function SpecRow28() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Tab padding</p>
    </div>
  );
}

function Text70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">0 16px</p>
    </div>
  );
}

function SpecRow29() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Font</p>
    </div>
  );
}

function Text72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">13px / 500</p>
    </div>
  );
}

function SpecRow30() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Active color</p>
    </div>
  );
}

function Text74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#0D9488 (Teal/600)</p>
    </div>
  );
}

function SpecRow31() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] w-[112px]">Active border-bottom</p>
    </div>
  );
}

function Text76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">2px solid #0D9488</p>
    </div>
  );
}

function SpecRow32() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Inactive color</p>
    </div>
  );
}

function Text78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#6B7280 (Gray/500)</p>
    </div>
  );
}

function SpecRow33() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Hover color</p>
    </div>
  );
}

function Text80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">#374151 (Gray/700)</p>
    </div>
  );
}

function SpecRow34() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Container border</p>
    </div>
  );
}

function Text82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">1px solid #E5E7EB (bottom only)</p>
    </div>
  );
}

function SpecRow35() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text81 />
      <Text82 />
    </div>
  );
}

function PatternsSection7() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="PatternsSection">
      <SpecRow28 />
      <SpecRow29 />
      <SpecRow30 />
      <SpecRow31 />
      <SpecRow32 />
      <SpecRow33 />
      <SpecRow34 />
      <SpecRow35 />
    </div>
  );
}

function PatternsSectionMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="PatternsSection:margin">
      <PatternsSection7 />
    </div>
  );
}

function Text83() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[15px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#5d0ec0] text-[13px] whitespace-nowrap">◈</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#5d0ec0] text-[0px] w-[781px]">
        <span className="leading-[19.5px] text-[12px]">Edge case — overflow tabs:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` When there are more tabs than fit horizontally, use a horizontal scroll container (overflow-x: auto, hide scrollbar). Never wrap tabs to a second line.`}</span>
      </p>
    </div>
  );
}

function Note6() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text83 />
      <Paragraph9 />
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

function Text84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Tabs.tsx</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#00786f] text-[11px] text-center whitespace-nowrap">Copy</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#f3f4f6] border-[#e5e7eb] border-b border-solid content-stretch flex items-center justify-between px-[12px] py-[6px] relative shrink-0 w-full" data-name="Container">
      <Text84 />
      <Button9 />
    </div>
  );
}

function CodeBlock7() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[207.5px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-name="Code Block">
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<Tabs`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  tabs={["Overview", "Agents", "Evidence", "Tasks"]}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  activeTab={tab}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  onChange={setTab}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`/>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Tab content — render based on activeTab`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`{tab === "Agents" && <AgentList />}`}</p>
        <p className="leading-[19.5px] whitespace-pre">{`{tab === "Evidence" && <EvidenceGrid />}`}</p>
      </div>
    </div>
  );
}

function CodeBlock6() {
  return (
    <div className="border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[239px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="CodeBlock">
      <Container9 />
      <CodeBlock7 />
    </div>
  );
}

function CodeBlockMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="CodeBlock:margin">
      <CodeBlock6 />
    </div>
  );
}

function SubSection3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading4 />
      <PatternsSectionMargin4 />
      <PatternsSectionMargin5 />
      <NoteMargin6 />
      <CodeBlockMargin3 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Data Row — Detail View</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] not-italic relative shrink-0 text-[#101828] text-[15px] whitespace-nowrap">Case: Miller v. Harrison Corp.</p>
    </div>
  );
}

function Text85() {
  return <div className="bg-[#16a34a] relative rounded-[16777200px] shrink-0 size-[6px]" data-name="Text" />;
}

function DsBadge1() {
  return (
    <div className="bg-[#d1fae5] border border-[#86efac] border-solid content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="DSBadge">
      <Text85 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#065f46] text-[12px] whitespace-nowrap">Active</p>
    </div>
  );
}

function DsBadge2() {
  return (
    <div className="bg-[#f0fdfa] border border-[#99f6e4] border-solid content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="DSBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#0f766e] text-[12px] whitespace-nowrap">87% Strength</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <DsBadge1 />
      <DsBadge2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex flex-col items-start px-[20px] py-[16px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
    </div>
  );
}

function Text86() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6a7282] text-[13px] whitespace-nowrap">Case ID</p>
    </div>
  );
}

function Text87() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#101828] text-[13px] whitespace-nowrap">CASE-2024-0847</p>
    </div>
  );
}

function DataRowPair() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[__387px_387px] grid-rows-[_19.50px] py-[10px] relative shrink-0 w-full" data-name="DataRowPair">
      <Text86 />
      <Text87 />
    </div>
  );
}

function Text88() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6a7282] text-[13px] whitespace-nowrap">Court</p>
    </div>
  );
}

function Text89() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#101828] text-[13px] whitespace-nowrap">U.S. District Court, SDNY</p>
    </div>
  );
}

function DataRowPair1() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[__387px_387px] grid-rows-[_19.50px] py-[10px] relative shrink-0 w-full" data-name="DataRowPair">
      <Text88 />
      <Text89 />
    </div>
  );
}

function Text90() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6a7282] text-[13px] whitespace-nowrap">Filing Date</p>
    </div>
  );
}

function Text91() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#101828] text-[13px] whitespace-nowrap">March 14, 2024</p>
    </div>
  );
}

function DataRowPair2() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[__387px_387px] grid-rows-[_19.50px] py-[10px] relative shrink-0 w-full" data-name="DataRowPair">
      <Text90 />
      <Text91 />
    </div>
  );
}

function Text92() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6a7282] text-[13px] whitespace-nowrap">Assigned Agents</p>
    </div>
  );
}

function Text93() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#101828] text-[13px] whitespace-nowrap">5 active</p>
    </div>
  );
}

function DataRowPair3() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[__387px_387px] grid-rows-[_19.50px] py-[10px] relative shrink-0 w-full" data-name="DataRowPair">
      <Text92 />
      <Text93 />
    </div>
  );
}

function Text94() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6a7282] text-[13px] whitespace-nowrap">Documents</p>
    </div>
  );
}

function Text95() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#101828] text-[13px] whitespace-nowrap">1,247 processed</p>
    </div>
  );
}

function DataRowPair4() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[__387px_387px] grid-rows-[_19.50px] py-[10px] relative shrink-0 w-full" data-name="DataRowPair">
      <Text94 />
      <Text95 />
    </div>
  );
}

function Text96() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6a7282] text-[13px] whitespace-nowrap">Last Activity</p>
    </div>
  );
}

function Text97() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#101828] text-[13px] whitespace-nowrap">2 minutes ago</p>
    </div>
  );
}

function DataRowPair5() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[__387px_387px] grid-rows-[_19.50px] py-[10px] relative shrink-0 w-full" data-name="DataRowPair">
      <Text96 />
      <Text97 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <DataRowPair />
      <DataRowPair1 />
      <DataRowPair2 />
      <DataRowPair3 />
      <DataRowPair4 />
      <DataRowPair5 />
    </div>
  );
}

function PatternsSection8() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[321px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="PatternsSection">
      <Container10 />
      <Container13 />
    </div>
  );
}

function PatternsSectionMargin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="PatternsSection:margin">
      <PatternsSection8 />
    </div>
  );
}

function Text98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Label font</p>
    </div>
  );
}

function Text99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">13px / 400 / #6B7280</p>
    </div>
  );
}

function SpecRow36() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text98 />
      <Text99 />
    </div>
  );
}

function Text100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Value font</p>
    </div>
  );
}

function Text101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">13px / 500 / #111827</p>
    </div>
  );
}

function SpecRow37() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text100 />
      <Text101 />
    </div>
  );
}

function Text102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Row padding</p>
    </div>
  );
}

function Text103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">10px 0</p>
    </div>
  );
}

function SpecRow38() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text102 />
      <Text103 />
    </div>
  );
}

function Text104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Divider</p>
    </div>
  );
}

function Text105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">1px solid #F3F4F6</p>
    </div>
  );
}

function SpecRow39() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text104 />
      <Text105 />
    </div>
  );
}

function Text106() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Grid</p>
    </div>
  );
}

function Text107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">2 col, label col: 50%</p>
    </div>
  );
}

function SpecRow40() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text106 />
      <Text107 />
    </div>
  );
}

function PatternsSection9() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="PatternsSection">
      <SpecRow36 />
      <SpecRow37 />
      <SpecRow38 />
      <SpecRow39 />
      <SpecRow40 />
    </div>
  );
}

function PatternsSectionMargin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="PatternsSection:margin">
      <PatternsSection9 />
    </div>
  );
}

function Text108() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[13px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[13px] whitespace-nowrap">ℹ</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[12px] w-[784px]">Data rows follow a label/value 50/50 grid. Labels are always Gray/500, values are always Gray/900. Long values wrap — never truncate detail view data.</p>
    </div>
  );
}

function Note7() {
  return (
    <div className="bg-[#eff6ff] border border-[#bedbff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text108 />
      <Paragraph10 />
    </div>
  );
}

function NoteMargin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Note:margin">
      <Note7 />
    </div>
  );
}

function SubSection4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading5 />
      <PatternsSectionMargin6 />
      <PatternsSectionMargin7 />
      <NoteMargin7 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Toast Notification (spec only)</p>
    </div>
  );
}

function Text109() {
  return <div className="bg-[#16a34a] relative rounded-[16777200px] shrink-0 size-[6px]" data-name="Text" />;
}

function DsBadge3() {
  return (
    <div className="bg-[#d1fae5] border border-[#86efac] border-solid content-stretch flex gap-[6px] items-center px-[8px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="DSBadge">
      <Text109 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#065f46] text-[11px] whitespace-nowrap">success</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#101828] text-[13px] whitespace-nowrap">Agent completed</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Research Agent finished in 4m 32s.</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[240.531_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-center justify-center pt-px relative shrink-0 w-[12px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[18px] text-center whitespace-nowrap">×</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex gap-[12px] items-start px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[384px]" data-name="Container">
      <DsBadge3 />
      <Container16 />
      <Button10 />
    </div>
  );
}

function Text110() {
  return <div className="bg-[#d4183d] relative rounded-[16777200px] shrink-0 size-[6px]" data-name="Text" />;
}

function DsBadge4() {
  return (
    <div className="bg-[#fee2e2] border border-[#fecaca] border-solid content-stretch flex gap-[6px] items-center px-[8px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="DSBadge">
      <Text110 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#991b1b] text-[11px] whitespace-nowrap">error</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#101828] text-[13px] whitespace-nowrap">Agent failed</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Draft Agent encountered an error.</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[258.281_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-center justify-center pt-px relative shrink-0 w-[12px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[18px] text-center whitespace-nowrap">×</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex gap-[12px] items-start px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[384px]" data-name="Container">
      <DsBadge4 />
      <Container18 />
      <Button11 />
    </div>
  );
}

function Text111() {
  return <div className="bg-[#2563eb] relative rounded-[16777200px] shrink-0 size-[6px]" data-name="Text" />;
}

function DsBadge5() {
  return (
    <div className="bg-[#dbeafe] border border-[#bfdbfe] border-solid content-stretch flex gap-[6px] items-center px-[8px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="DSBadge">
      <Text111 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#1e40af] text-[11px] whitespace-nowrap">info</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#101828] text-[13px] whitespace-nowrap">Agent queued</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Witness Prep is waiting to start.</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[264.172_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Paragraph15 />
      <Paragraph16 />
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-center justify-center pt-px relative shrink-0 w-[12px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[18px] text-center whitespace-nowrap">×</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex gap-[12px] items-start px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[384px]" data-name="Container">
      <DsBadge5 />
      <Container20 />
      <Button12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[384px] relative shrink-0" data-name="Container">
      <Container15 />
      <Container17 />
      <Container19 />
    </div>
  );
}

function PatternsSection10() {
  return (
    <div className="content-stretch flex flex-col h-[228px] items-start pt-[20px] relative shrink-0 w-[832px]" data-name="PatternsSection">
      <Container14 />
    </div>
  );
}

function Text112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Position</p>
    </div>
  );
}

function Text113() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Bottom-right, 24px from edges</p>
    </div>
  );
}

function SpecRow41() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text112 />
      <Text113 />
    </div>
  );
}

function Text114() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Width</p>
    </div>
  );
}

function Text115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">360px fixed</p>
    </div>
  );
}

function SpecRow42() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text114 />
      <Text115 />
    </div>
  );
}

function Text116() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Auto-dismiss</p>
    </div>
  );
}

function Text117() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">5s (info/success), persistent (error)</p>
    </div>
  );
}

function SpecRow43() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text116 />
      <Text117 />
    </div>
  );
}

function Text118() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Stack</p>
    </div>
  );
}

function Text119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Newest on top, max 4 visible</p>
    </div>
  );
}

function SpecRow44() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text118 />
      <Text119 />
    </div>
  );
}

function Text120() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Border radius</p>
    </div>
  );
}

function Text121() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">12px</p>
    </div>
  );
}

function SpecRow45() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text120 />
      <Text121 />
    </div>
  );
}

function Text122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Shadow</p>
    </div>
  );
}

function Text123() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">--shadow-lg</p>
    </div>
  );
}

function SpecRow46() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text122 />
      <Text123 />
    </div>
  );
}

function Text124() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Z-index</p>
    </div>
  );
}

function Text125() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">60 (above modals)</p>
    </div>
  );
}

function SpecRow47() {
  return (
    <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text124 />
      <Text125 />
    </div>
  );
}

function Text126() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Animation</p>
    </div>
  );
}

function Text127() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">slide-in from right, 200ms ease-out</p>
    </div>
  );
}

function SpecRow48() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="SpecRow">
      <Text126 />
      <Text127 />
    </div>
  );
}

function PatternsSection11() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="PatternsSection">
      <SpecRow41 />
      <SpecRow42 />
      <SpecRow43 />
      <SpecRow44 />
      <SpecRow45 />
      <SpecRow46 />
      <SpecRow47 />
      <SpecRow48 />
    </div>
  );
}

function PatternsSectionMargin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="PatternsSection:margin">
      <PatternsSection11 />
    </div>
  );
}

function Text128() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[15px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#5d0ec0] text-[13px] whitespace-nowrap">◈</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#5d0ec0] text-[0px] w-[781px]">
        <span className="leading-[19.5px] text-[12px]">Edge case — rapid firing:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` If more than 4 toasts queue simultaneously, collapse older ones into a "3 more notifications" summary chip. Never render an unbounded stack.`}</span>
      </p>
    </div>
  );
}

function Note8() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text128 />
      <Paragraph17 />
    </div>
  );
}

function NoteMargin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Note:margin">
      <Note8 />
    </div>
  );
}

function Text129() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[15px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#5d0ec0] text-[13px] whitespace-nowrap">◈</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#5d0ec0] text-[0px] w-[781px]">
        <span className="leading-[19.5px] text-[12px]">Edge case — persistence:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` Error toasts must not auto-dismiss. The user must explicitly close them to ensure they've read the failure reason. Success toasts dismiss after 5s with a visible countdown indicator.`}</span>
      </p>
    </div>
  );
}

function Note9() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text129 />
      <Paragraph18 />
    </div>
  );
}

function NoteMargin9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Note:margin">
      <Note9 />
    </div>
  );
}

function SubSection5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading7 />
      <PatternsSection10 />
      <PatternsSectionMargin8 />
      <NoteMargin8 />
      <NoteMargin9 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Empty States</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d="M12 5V19M5 12H19" id="Vector" stroke="#9CA3AF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[48px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] text-center whitespace-nowrap">No agents yet</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-center pt-[2px] relative shrink-0 w-[210.203px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center whitespace-nowrap">Create your first agent to get started.</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[210.203px]" data-name="Container">
      <Paragraph19 />
      <Paragraph20 />
    </div>
  );
}

function DsButton2() {
  return (
    <div className="bg-[#0d9488] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex h-[32px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="DSButton">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Create Agent</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-dashed col-1 content-stretch flex flex-col gap-[12px] items-center justify-center justify-self-stretch p-[32px] relative rounded-[12px] row-1 self-stretch shrink-0" data-name="Container">
      <Container22 />
      <Container23 />
      <DsButton2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d={svgPaths.pa2c4300} id="Vector" stroke="#9CA3AF" strokeWidth="2" />
          <path d="M16.5 16.5L20.5 20.5" id="Vector_2" stroke="#9CA3AF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[48px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] text-center whitespace-nowrap">No results found</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-center pt-[2px] relative shrink-0 w-[198.125px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center whitespace-nowrap">Try adjusting your search or filters.</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[198.125px]" data-name="Container">
      <Paragraph21 />
      <Paragraph22 />
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#009689] text-[13px] text-center whitespace-nowrap">Clear filters</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-dashed col-2 content-stretch flex flex-col gap-[12px] items-center justify-center justify-self-stretch p-[32px] relative rounded-[12px] row-1 self-stretch shrink-0" data-name="Container">
      <Container25 />
      <Container26 />
      <Button13 />
    </div>
  );
}

function PatternsSection12() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[__408px_408px] grid-rows-[_211px] relative shrink-0 w-full" data-name="PatternsSection">
      <Container21 />
      <Container24 />
    </div>
  );
}

function PatternsSectionMargin9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="PatternsSection:margin">
      <PatternsSection12 />
    </div>
  );
}

function Text130() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[13px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[13px] whitespace-nowrap">ℹ</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[12px] w-[784px]">Every list, table, or grid must have an empty state. Minimum height 160px. Always include an icon (48×48px, gray-100 bg, gray-400 icon), heading, description, and a primary action when relevant.</p>
    </div>
  );
}

function Note10() {
  return (
    <div className="bg-[#eff6ff] border border-[#bedbff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text130 />
      <Paragraph23 />
    </div>
  );
}

function NoteMargin10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Note:margin">
      <Note10 />
    </div>
  );
}

function Text131() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[15px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#5d0ec0] text-[13px] whitespace-nowrap">◈</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#5d0ec0] text-[0px] w-[781px]">
        <span className="leading-[19.5px] text-[12px]">Edge case — search empty vs. data empty:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` "No results for your search" (search empty) is different from "You have no agents" (data empty). Use distinct copy and distinct CTAs. Never use the same empty state for both contexts.`}</span>
      </p>
    </div>
  );
}

function Note11() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text131 />
      <Paragraph24 />
    </div>
  );
}

function NoteMargin11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Note:margin">
      <Note11 />
    </div>
  );
}

function Text132() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">EmptyState.tsx</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#00786f] text-[11px] text-center whitespace-nowrap">Copy</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#f3f4f6] border-[#e5e7eb] border-b border-solid content-stretch flex items-center justify-between px-[12px] py-[6px] relative shrink-0 w-full" data-name="Container">
      <Text132 />
      <Button14 />
    </div>
  );
}

function CodeBlock9() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[324.5px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-name="Code Block">
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Data empty — with CTA`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<EmptyState`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  icon={<PlusIcon />}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  title="No agents yet"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  description="Create your first agent to get started."`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  action={<Button variant="primary" size="sm">Create Agent</Button>}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`/>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Search empty — with clear action`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<EmptyState`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  icon={<SearchIcon />}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  title="No results found"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  description="Try adjusting your search or filters."`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  action={<button onClick={clearFilters}>Clear filters</button>}`}</p>
        <p className="leading-[19.5px] whitespace-pre">{`/>`}</p>
      </div>
    </div>
  );
}

function CodeBlock8() {
  return (
    <div className="border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[356px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="CodeBlock">
      <Container27 />
      <CodeBlock9 />
    </div>
  );
}

function CodeBlockMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="CodeBlock:margin">
      <CodeBlock8 />
    </div>
  );
}

function SubSection6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading8 />
      <PatternsSectionMargin9 />
      <NoteMargin10 />
      <NoteMargin11 />
      <CodeBlockMargin4 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Skeleton / Loading State</p>
    </div>
  );
}

function Container29() {
  return <div className="bg-[#e5e7eb] opacity-83 relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container" />;
}

function Container31() {
  return <div className="bg-[#e5e7eb] h-[12px] opacity-83 relative rounded-[4px] shrink-0 w-[223.328px]" data-name="Container" />;
}

function Container32() {
  return <div className="bg-[#f3f4f6] h-[10px] opacity-83 relative rounded-[4px] shrink-0 w-[335px]" data-name="Container" />;
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0" data-name="Container:margin">
      <Container32 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[670_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container31 />
      <ContainerMargin />
    </div>
  );
}

function Container33() {
  return <div className="bg-[#e5e7eb] h-[20px] opacity-83 relative rounded-[16777200px] shrink-0 w-[64px]" data-name="Container" />;
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[790px]" data-name="Container">
      <Container29 />
      <Container30 />
      <Container33 />
    </div>
  );
}

function Container34() {
  return <div className="bg-[#e5e7eb] h-[8px] opacity-83 relative rounded-[4px] shrink-0 w-[790px]" data-name="Container" />;
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Container:margin">
      <Container34 />
    </div>
  );
}

function Container35() {
  return <div className="bg-[#e5e7eb] h-[8px] opacity-83 relative rounded-[4px] shrink-0 w-[658.328px]" data-name="Container" />;
}

function ContainerMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Container:margin">
      <Container35 />
    </div>
  );
}

function Container36() {
  return <div className="bg-[#e5e7eb] h-[8px] opacity-83 relative rounded-[4px] shrink-0 w-[526.664px]" data-name="Container" />;
}

function ContainerMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Container:margin">
      <Container36 />
    </div>
  );
}

function PatternsSection13() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start p-[20px] relative rounded-[12px] shrink-0 w-full" data-name="PatternsSection">
      <Container28 />
      <ContainerMargin1 />
      <ContainerMargin2 />
      <ContainerMargin3 />
    </div>
  );
}

function PatternsSectionMargin10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="PatternsSection:margin">
      <PatternsSection13 />
    </div>
  );
}

function Text133() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[13px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[13px] whitespace-nowrap">ℹ</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[12px] w-[784px]">Skeleton loaders use Gray/200 (#E5E7EB) as base with animate-pulse (CSS opacity oscillation, 2s ease-in-out). Match the skeleton shape exactly to the content layout — including badge pill shapes, avatar circles, and line widths.</p>
    </div>
  );
}

function Note12() {
  return (
    <div className="bg-[#eff6ff] border border-[#bedbff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text133 />
      <Paragraph25 />
    </div>
  );
}

function NoteMargin12() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Note:margin">
      <Note12 />
    </div>
  );
}

function Text134() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[15px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#5d0ec0] text-[13px] whitespace-nowrap">◈</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#5d0ec0] text-[0px] w-[781px]">
        <span className="leading-[19.5px] text-[12px]">Edge case — skeleton duration:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` If data loads in under 200ms, skip the skeleton entirely (prevent flash). Only show skeleton if fetch takes > 200ms. Use a 200ms delay before mounting the skeleton component.`}</span>
      </p>
    </div>
  );
}

function Note13() {
  return (
    <div className="bg-[#f5f3ff] border border-[#ddd6ff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text134 />
      <Paragraph26 />
    </div>
  );
}

function NoteMargin13() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Note:margin">
      <Note13 />
    </div>
  );
}

function Text135() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Skeleton.tsx</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#00786f] text-[11px] text-center whitespace-nowrap">Copy</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#f3f4f6] border-[#e5e7eb] border-b border-solid content-stretch flex items-center justify-between px-[12px] py-[6px] relative shrink-0 w-full" data-name="Container">
      <Text135 />
      <Button15 />
    </div>
  );
}

function CodeBlock11() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[188px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-name="Code Block">
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Skeleton matches the real component's layout`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<SkeletonAgentRow />   // Avatar + name + badge + progress`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<SkeletonCard />       // Title + body lines + footer`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<SkeletonTable rows={4} cols={5} />`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Timing guard — show skeleton only after 200ms delay`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">const showSkeleton = useDelayedBool(isLoading, 200);</p>
        <p className="leading-[19.5px] whitespace-pre">{`{showSkeleton && <SkeletonAgentRow />}`}</p>
      </div>
    </div>
  );
}

function CodeBlock10() {
  return (
    <div className="border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[219.5px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="CodeBlock">
      <Container37 />
      <CodeBlock11 />
    </div>
  );
}

function CodeBlockMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="CodeBlock:margin">
      <CodeBlock10 />
    </div>
  );
}

function SubSection7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading9 />
      <PatternsSectionMargin10 />
      <NoteMargin12 />
      <NoteMargin13 />
      <CodeBlockMargin5 />
    </div>
  );
}

function PatternsSection() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[896px] pb-[80px] pt-[40px] px-[32px] relative shrink-0 w-[896px]" data-name="PatternsSection">
      <SectionHeader />
      <SubSection />
      <SubSection1 />
      <SubSection2 />
      <SubSection3 />
      <SubSection4 />
      <SubSection5 />
      <SubSection6 />
      <SubSection7 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-center pl-[224px] pt-[56px] relative shrink-0 w-full" data-name="App">
      <PatternsSection />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_7)" id="Icon">
          <path d={svgPaths.p2add52c0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.6" />
          <path d={svgPaths.p2ee86900} fill="white" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_0_7">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#0d9488] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.25px] not-italic relative shrink-0 text-[#101828] text-[13px] whitespace-nowrap">Claimora</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] not-italic relative shrink-0 text-[#99a1af] text-[10px] whitespace-nowrap">Design System v1.0</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[92.117px]" data-name="Container">
      <Paragraph27 />
      <Paragraph28 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container38() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start p-[20px] relative shrink-0 w-full" data-name="Container">
      <Container39 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Foundations</p>
    </div>
  );
}

function Text136() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">◈</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text136 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">Foundations</p>
    </div>
  );
}

function ButtonMargin5() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[6px] relative shrink-0 w-full" data-name="Button:margin">
      <Button16 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph29 />
      <ButtonMargin5 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Components</p>
    </div>
  );
}

function Text137() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">⬡</p>
    </div>
  );
}

function Button17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text137 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">Button</p>
    </div>
  );
}

function ButtonMargin6() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[6px] relative shrink-0 w-full" data-name="Button:margin">
      <Button17 />
    </div>
  );
}

function Text138() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">⊟</p>
    </div>
  );
}

function Button18() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text138 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">Form Fields</p>
    </div>
  );
}

function ButtonMargin7() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[2px] relative shrink-0 w-full" data-name="Button:margin">
      <Button18 />
    </div>
  );
}

function Text139() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">⊞</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text139 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">Data Display</p>
    </div>
  );
}

function ButtonMargin8() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[2px] relative shrink-0 w-full" data-name="Button:margin">
      <Button19 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col h-[156px] items-start pt-[20px] relative shrink-0 w-[199px]" data-name="Container">
      <Paragraph30 />
      <ButtonMargin6 />
      <ButtonMargin7 />
      <ButtonMargin8 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Patterns</p>
    </div>
  );
}

function Text140() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0d9488] text-[14px] text-center whitespace-nowrap">⊕</p>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text140 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#0d9488] text-[13px] whitespace-nowrap">{`Patterns & Layouts`}</p>
    </div>
  );
}

function ButtonMargin9() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[6px] relative shrink-0 w-full" data-name="Button:margin">
      <Button20 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col h-[78px] items-start pt-[20px] relative shrink-0 w-[199px]" data-name="Container">
      <Paragraph31 />
      <ButtonMargin9 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Reference</p>
    </div>
  );
}

function Text141() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">⊛</p>
    </div>
  );
}

function Button21() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text141 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">{`Accessibility & Quick Ref`}</p>
    </div>
  );
}

function ButtonMargin10() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[6px] relative shrink-0 w-full" data-name="Button:margin">
      <Button21 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col h-[98px] items-start py-[20px] relative shrink-0 w-[199px]" data-name="Container">
      <Paragraph32 />
      <ButtonMargin10 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-[539.5_0_0] flex-col items-start min-h-px overflow-clip px-[12px] py-[16px] relative w-full" data-name="Navigation">
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.875px] not-italic relative shrink-0 text-[#99a1af] text-[11px] w-[183px]">Built with Inter · Teal + Navy palette · WCAG AA compliant</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="border-[#e5e7eb] border-solid border-t content-stretch flex flex-col items-start px-[20px] py-[16px] relative shrink-0 w-full" data-name="Container">
      <Paragraph33 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#fafafa] border-[#e5e7eb] border-r border-solid content-stretch flex flex-col h-[710px] items-start left-0 top-0 w-[224px]" data-name="Sidebar">
      <Container38 />
      <Navigation />
      <Container46 />
    </div>
  );
}

function Text142() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">Design System</p>
    </div>
  );
}

function Text143() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#d1d5dc] text-[11px] whitespace-nowrap">/</p>
    </div>
  );
}

function Text144() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#1e2939] text-[13px] whitespace-nowrap">{`Patterns & Layouts`}</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Text142 />
      <Text143 />
      <Text144 />
    </div>
  );
}

function Text146() {
  return <div className="bg-[#0d9488] relative rounded-[16777200px] shrink-0 size-[6px]" data-name="Text" />;
}

function Text145() {
  return (
    <div className="bg-[#f0fdfa] border border-[#99f6e4] border-solid content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="Text">
      <Text146 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#0f766e] text-[11px] whitespace-nowrap">v1.0.0 · Claimora DS</p>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.9)] border-[#e5e7eb] border-b border-solid content-stretch flex h-[56px] items-center justify-between left-[224px] px-[32px] top-0 w-[905px]" data-name="TopBar">
      <Container47 />
      <Text145 />
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