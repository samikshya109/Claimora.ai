import svgPaths from "./svg-93mp54qsc4";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] tracking-[-0.6px] whitespace-nowrap">{`Accessibility & Quick Reference`}</p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0" data-name="Paragraph:margin">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-[672px]">WCAG 2.1 AA compliance notes, contrast pairs, keyboard patterns, and a one-page token quick reference for handoff.</p>
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Color Contrast — WCAG 2.1 AA</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Aa — Sample Text</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#0d9488] content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">White on Teal/600</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#00a63e] text-[11px] whitespace-nowrap">4.7:1 ✓ AA</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start px-[12px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function ContrastPair() {
  return (
    <div className="border border-[#e5e7eb] border-solid col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] row-1 self-stretch shrink-0" data-name="ContrastPair">
      <Container />
      <Container1 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0d9488] text-[14px] whitespace-nowrap">Aa — Sample Text</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Teal/600 on White</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#00a63e] text-[11px] whitespace-nowrap">4.7:1 ✓ AA</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start px-[12px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function ContrastPair1() {
  return (
    <div className="border border-[#e5e7eb] border-solid col-2 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] row-1 self-stretch shrink-0" data-name="ContrastPair">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Aa — Sample Text</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#0a1628] content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">White on Navy/900</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#00a63e] text-[11px] whitespace-nowrap">16.4:1 ✓ AA</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start px-[12px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
    </div>
  );
}

function ContrastPair2() {
  return (
    <div className="border border-[#e5e7eb] border-solid col-3 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] row-1 self-stretch shrink-0" data-name="ContrastPair">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">Aa — Sample Text</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Gray/900 on White</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#00a63e] text-[11px] whitespace-nowrap">19.4:1 ✓ AA</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start px-[12px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
    </div>
  );
}

function ContrastPair3() {
  return (
    <div className="border border-[#e5e7eb] border-solid col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] row-2 self-stretch shrink-0" data-name="ContrastPair">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Aa — Sample Text</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Gray/500 on White</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#00a63e] text-[11px] whitespace-nowrap">4.6:1 ✓ AA</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text13 />
      <Text14 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start px-[12px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
    </div>
  );
}

function ContrastPair4() {
  return (
    <div className="border border-[#e5e7eb] border-solid col-2 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] row-2 self-stretch shrink-0" data-name="ContrastPair">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#991b1b] text-[14px] whitespace-nowrap">Aa — Sample Text</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Error Text on Error Bg</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#00a63e] text-[11px] whitespace-nowrap">7.8:1 ✓ AA</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start px-[12px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
    </div>
  );
}

function ContrastPair5() {
  return (
    <div className="border border-[#e5e7eb] border-solid col-3 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] row-2 self-stretch shrink-0" data-name="ContrastPair">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#065f46] text-[14px] whitespace-nowrap">Aa — Sample Text</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Text18 />
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Success Text on Success Bg</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#00a63e] text-[11px] whitespace-nowrap">7.2:1 ✓ AA</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text19 />
      <Text20 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start px-[12px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Container20 />
    </div>
  );
}

function ContrastPair6() {
  return (
    <div className="border border-[#e5e7eb] border-solid col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] row-3 self-stretch shrink-0" data-name="ContrastPair">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#92400e] text-[14px] whitespace-nowrap">Aa — Sample Text</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Warning Text on Warning Bg</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#00a63e] text-[11px] whitespace-nowrap">5.4:1 ✓ AA</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start px-[12px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
    </div>
  );
}

function ContrastPair7() {
  return (
    <div className="border border-[#e5e7eb] border-solid col-2 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] row-3 self-stretch shrink-0" data-name="ContrastPair">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#2dd4bf] text-[14px] whitespace-nowrap">Aa — Sample Text</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Teal/400 on White</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#e7000b] text-[11px] whitespace-nowrap">2.3:1 ✗ Fail</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text25 />
      <Text26 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start px-[12px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
    </div>
  );
}

function ContrastPair8() {
  return (
    <div className="border border-[#e5e7eb] border-solid col-3 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] row-3 self-stretch shrink-0" data-name="ContrastPair">
      <Container24 />
      <Container25 />
    </div>
  );
}

function QuickRefSection1() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[___269.33px_269.34px_269.34px] grid-rows-[___90.50px_90.50px_90.50px] relative shrink-0 w-full" data-name="QuickRefSection">
      <ContrastPair />
      <ContrastPair1 />
      <ContrastPair2 />
      <ContrastPair3 />
      <ContrastPair4 />
      <ContrastPair5 />
      <ContrastPair6 />
      <ContrastPair7 />
      <ContrastPair8 />
    </div>
  );
}

function QuickRefSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="QuickRefSection:margin">
      <QuickRefSection1 />
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[14px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#973c00] text-[13px] whitespace-nowrap">⚠</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#973c00] text-[12px] w-[780px]">Teal/400 (#2DD4BF) on white fails AA (2.3:1). NEVER use it for text on white backgrounds. It is decorative-only: swatches, heatmap cells, progress fill. All interactive text must use Teal/600 or darker.</p>
    </div>
  );
}

function Note() {
  return (
    <div className="bg-[#fffbeb] border border-[#fee685] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text27 />
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

function Text28() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[13px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[13px] whitespace-nowrap">ℹ</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[12px] w-[784px]">{`AA requirement: 4.5:1 for normal text (< 18px or < 14px bold), 3:1 for large text (≥ 18px or ≥ 14px bold). All semantic bg/text pairs above meet or exceed this threshold.`}</p>
    </div>
  );
}

function Note1() {
  return (
    <div className="bg-[#eff6ff] border border-[#bedbff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text28 />
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

function SubSection() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading1 />
      <QuickRefSectionMargin />
      <NoteMargin />
      <NoteMargin1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Keyboard Interaction Patterns</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] tracking-[0.275px] uppercase whitespace-nowrap">Component</p>
    </div>
  );
}

function Text30() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] tracking-[0.275px] uppercase whitespace-nowrap">Key</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] tracking-[0.275px] uppercase whitespace-nowrap">Behavior</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#f9fafb] border-[#e5e7eb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_16.50px] px-[16px] py-[10px] relative shrink-0 w-full" data-name="Container">
      <Text29 />
      <Text30 />
      <Text31 />
    </div>
  );
}

function Text32() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Button</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">Enter / Space</p>
    </div>
  );
}

function Text34() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Triggers click action</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text32 />
      <Text33 />
      <Text34 />
    </div>
  );
}

function Text35() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Button (loading)</p>
    </div>
  );
}

function Text36() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">Any</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Ignored — non-interactive</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text35 />
      <Text36 />
      <Text37 />
    </div>
  );
}

function Text38() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Input</p>
    </div>
  );
}

function Text39() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">Tab</p>
    </div>
  );
}

function Text40() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Focus next field</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text38 />
      <Text39 />
      <Text40 />
    </div>
  );
}

function Text41() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Input</p>
    </div>
  );
}

function Text42() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">Shift+Tab</p>
    </div>
  );
}

function Text43() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Focus previous field</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text41 />
      <Text42 />
      <Text43 />
    </div>
  );
}

function Text44() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Select</p>
    </div>
  );
}

function Text45() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">Space / Enter</p>
    </div>
  );
}

function Text46() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Opens native dropdown</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text44 />
      <Text45 />
      <Text46 />
    </div>
  );
}

function Text47() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Checkbox</p>
    </div>
  );
}

function Text48() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">Space</p>
    </div>
  );
}

function Text49() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Toggles checked state</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text47 />
      <Text48 />
      <Text49 />
    </div>
  );
}

function Text50() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Toggle</p>
    </div>
  );
}

function Text51() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">Space</p>
    </div>
  );
}

function Text52() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Toggles on/off state</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text50 />
      <Text51 />
      <Text52 />
    </div>
  );
}

function Text53() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Radio</p>
    </div>
  );
}

function Text54() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">Arrow keys</p>
    </div>
  );
}

function Text55() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Moves selection within group</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text53 />
      <Text54 />
      <Text55 />
    </div>
  );
}

function Text56() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Modal</p>
    </div>
  );
}

function Text57() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">Escape</p>
    </div>
  );
}

function Text58() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Closes modal (non-destructive)</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text56 />
      <Text57 />
      <Text58 />
    </div>
  );
}

function Text59() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Modal</p>
    </div>
  );
}

function Text60() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">Tab</p>
    </div>
  );
}

function Text61() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Cycles through modal elements only (trapped)</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text59 />
      <Text60 />
      <Text61 />
    </div>
  );
}

function Text62() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Tabs</p>
    </div>
  );
}

function Text63() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">Arrow Left/Right</p>
    </div>
  );
}

function Text64() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Switches active tab</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text62 />
      <Text63 />
      <Text64 />
    </div>
  );
}

function Text65() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Tabs</p>
    </div>
  );
}

function Text66() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">Home / End</p>
    </div>
  );
}

function Text67() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Jump to first / last tab</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text65 />
      <Text66 />
      <Text67 />
    </div>
  );
}

function Text68() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Dropdown</p>
    </div>
  );
}

function Text69() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">Escape</p>
    </div>
  );
}

function Text70() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Closes without selection</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text68 />
      <Text69 />
      <Text70 />
    </div>
  );
}

function Text71() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Tooltip</p>
    </div>
  );
}

function Text72() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">Focus</p>
    </div>
  );
}

function Text73() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Shows tooltip (keyboard visible)</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text71 />
      <Text72 />
      <Text73 />
    </div>
  );
}

function QuickRefSection2() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[528.5px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="QuickRefSection">
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
    </div>
  );
}

function QuickRefSectionMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="QuickRefSection:margin">
      <QuickRefSection2 />
    </div>
  );
}

function Text74() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[13px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[13px] whitespace-nowrap">ℹ</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[12px] w-[784px]">All interactive elements must be reachable and operable by keyboard. Focus rings use: outline: 2px solid #0D9488; outline-offset: 2px — never remove focus-visible styles, only hide :focus without :focus-visible to preserve mouse aesthetics.</p>
    </div>
  );
}

function Note2() {
  return (
    <div className="bg-[#eff6ff] border border-[#bedbff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text74 />
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

function SubSection1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading2 />
      <QuickRefSectionMargin1 />
      <NoteMargin2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">ARIA Patterns</p>
    </div>
  );
}

function Text75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Accessibility markup reference</p>
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

function Container42() {
  return (
    <div className="bg-[#f3f4f6] border-[#e5e7eb] border-b border-solid content-stretch flex items-center justify-between px-[12px] py-[6px] relative shrink-0 w-full" data-name="Container">
      <Text75 />
      <Button />
    </div>
  );
}

function CodeBlock1() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[968px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-name="Code Block">
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Button with loading`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<button`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  aria-busy={isLoading}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  aria-label={isLoading ? "Saving agent..." : "Save agent"}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  disabled={isLoading}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Icon-only button`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<button aria-label="Delete agent" title="Delete agent">`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  <TrashIcon />`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`</button>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Input with error`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<input`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  id="agent-name"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  aria-describedby="agent-name-error"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  aria-invalid={hasError}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`/>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<p id="agent-name-error" role="alert">This field is required.</p>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Modal`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<div`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  role="dialog"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  aria-modal="true"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  aria-labelledby="modal-title"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  <h2 id="modal-title">Configure Agent</h2>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`</div>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Progress bar`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<div`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  role="progressbar"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  aria-valuenow={70}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  aria-valuemin={0}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  aria-valuemax={100}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  aria-label="Case strength analysis progress"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`/>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Toggle`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`<button`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  role="switch"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  aria-checked={isOn}`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`  aria-label="Enable live mode"`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`/>`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// Badge — decorative, no role needed`}</p>
        <p className="leading-[19.5px] mb-0 whitespace-pre">{`// If badge conveys meaning not in nearby text, add:`}</p>
        <p className="leading-[19.5px] whitespace-pre">{`<span aria-label="Status: running" />`}</p>
      </div>
    </div>
  );
}

function CodeBlock() {
  return (
    <div className="border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[999.5px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="CodeBlock">
      <Container42 />
      <CodeBlock1 />
    </div>
  );
}

function CodeBlockMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="CodeBlock:margin">
      <CodeBlock />
    </div>
  );
}

function SubSection2() {
  return (
    <div className="content-stretch flex flex-col h-[1079.5px] items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading3 />
      <CodeBlockMargin />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Token Quick Reference — Handoff Sheet</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">Colors</p>
    </div>
  );
}

function Text76() {
  return <div className="bg-[#0d9488] border border-[rgba(0,0,0,0.1)] border-solid relative rounded-[4px] shrink-0 size-[12px]" data-name="Text" />;
}

function Text77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">--teal-600</p>
    </div>
  );
}

function Text78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.0645px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        — Primary brand
      </p>
    </div>
  );
}

function Container45() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Text76 />
      <Text77 />
      <Text78 />
    </div>
  );
}

function Text79() {
  return <div className="bg-[#0f766e] border border-[rgba(0,0,0,0.1)] border-solid relative rounded-[4px] shrink-0 size-[12px]" data-name="Text" />;
}

function Text80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">--teal-700</p>
    </div>
  );
}

function Text81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.0645px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        — Hover state
      </p>
    </div>
  );
}

function Container46() {
  return (
    <div className="col-2 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Text79 />
      <Text80 />
      <Text81 />
    </div>
  );
}

function Text82() {
  return <div className="bg-[#f0fdfa] border border-[rgba(0,0,0,0.1)] border-solid relative rounded-[4px] shrink-0 size-[12px]" data-name="Text" />;
}

function Text83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">--teal-50</p>
    </div>
  );
}

function Text84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.0645px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        — Tertiary btn bg
      </p>
    </div>
  );
}

function Container47() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Text82 />
      <Text83 />
      <Text84 />
    </div>
  );
}

function Text85() {
  return <div className="bg-[#0a1628] border border-[rgba(0,0,0,0.1)] border-solid relative rounded-[4px] shrink-0 size-[12px]" data-name="Text" />;
}

function Text86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">--navy-900</p>
    </div>
  );
}

function Text87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.0645px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        — Dark surfaces
      </p>
    </div>
  );
}

function Container48() {
  return (
    <div className="col-2 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Text85 />
      <Text86 />
      <Text87 />
    </div>
  );
}

function Text88() {
  return <div className="bg-[#f9fafb] border border-[rgba(0,0,0,0.1)] border-solid relative rounded-[4px] shrink-0 size-[12px]" data-name="Text" />;
}

function Text89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">--gray-50</p>
    </div>
  );
}

function Text90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.0645px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        — Page bg / disabled
      </p>
    </div>
  );
}

function Container49() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <Text88 />
      <Text89 />
      <Text90 />
    </div>
  );
}

function Text91() {
  return <div className="bg-[#e5e7eb] border border-[rgba(0,0,0,0.1)] border-solid relative rounded-[4px] shrink-0 size-[12px]" data-name="Text" />;
}

function Text92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">--gray-200</p>
    </div>
  );
}

function Text93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.0645px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        — Borders
      </p>
    </div>
  );
}

function Container50() {
  return (
    <div className="col-2 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <Text91 />
      <Text92 />
      <Text93 />
    </div>
  );
}

function Text94() {
  return <div className="bg-[#6b7280] border border-[rgba(0,0,0,0.1)] border-solid relative rounded-[4px] shrink-0 size-[12px]" data-name="Text" />;
}

function Text95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">--gray-500</p>
    </div>
  );
}

function Text96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.0645px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        — Secondary text
      </p>
    </div>
  );
}

function Container51() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Container">
      <Text94 />
      <Text95 />
      <Text96 />
    </div>
  );
}

function Text97() {
  return <div className="bg-[#111827] border border-[rgba(0,0,0,0.1)] border-solid relative rounded-[4px] shrink-0 size-[12px]" data-name="Text" />;
}

function Text98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">--gray-900</p>
    </div>
  );
}

function Text99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.0645px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        — Primary text
      </p>
    </div>
  );
}

function Container52() {
  return (
    <div className="col-2 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Container">
      <Text97 />
      <Text98 />
      <Text99 />
    </div>
  );
}

function Text100() {
  return <div className="bg-[#16a34a] border border-[rgba(0,0,0,0.1)] border-solid relative rounded-[4px] shrink-0 size-[12px]" data-name="Text" />;
}

function Text101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">--success</p>
    </div>
  );
}

function Text102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.0645px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        — Success
      </p>
    </div>
  );
}

function Container53() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-5 self-stretch shrink-0" data-name="Container">
      <Text100 />
      <Text101 />
      <Text102 />
    </div>
  );
}

function Text103() {
  return <div className="bg-[#d97706] border border-[rgba(0,0,0,0.1)] border-solid relative rounded-[4px] shrink-0 size-[12px]" data-name="Text" />;
}

function Text104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">--warning</p>
    </div>
  );
}

function Text105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.0645px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        — Warning
      </p>
    </div>
  );
}

function Container54() {
  return (
    <div className="col-2 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-5 self-stretch shrink-0" data-name="Container">
      <Text103 />
      <Text104 />
      <Text105 />
    </div>
  );
}

function Text106() {
  return <div className="bg-[#d4183d] border border-[rgba(0,0,0,0.1)] border-solid relative rounded-[4px] shrink-0 size-[12px]" data-name="Text" />;
}

function Text107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">--error</p>
    </div>
  );
}

function Text108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.0645px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        — Error/Destructive
      </p>
    </div>
  );
}

function Container55() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-6 self-stretch shrink-0" data-name="Container">
      <Text106 />
      <Text107 />
      <Text108 />
    </div>
  );
}

function Text109() {
  return <div className="bg-[#2563eb] border border-[rgba(0,0,0,0.1)] border-solid relative rounded-[4px] shrink-0 size-[12px]" data-name="Text" />;
}

function Text110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">--info</p>
    </div>
  );
}

function Text111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.0645px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        — Info
      </p>
    </div>
  );
}

function Container56() {
  return (
    <div className="col-2 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-6 self-stretch shrink-0" data-name="Container">
      <Text109 />
      <Text110 />
      <Text111 />
    </div>
  );
}

function Container44() {
  return (
    <div className="gap-x-[32px] gap-y-[6px] grid grid-cols-[__379px_379px] grid-rows-[______18px_18px_18px_18px_18px_18px] relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container46 />
      <Container47 />
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
      <Container52 />
      <Container53 />
      <Container54 />
      <Container55 />
      <Container56 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Container:margin">
      <Container44 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <ContainerMargin />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">Typography</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Display 58px 700</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">H1 36px 700</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">H2 24px 500</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">H3 20px 500</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Body-lg 18px 400</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Body 16px 400</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Small 14px 500</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Caption 12px 400</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="gap-x-[32px] gap-y-[4px] grid grid-cols-[__379px_379px] grid-rows-[____18px_18px_18px_18px] relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
      <Paragraph7 />
      <Paragraph8 />
      <Paragraph9 />
      <Paragraph10 />
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Container:margin">
      <Container58 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col h-[137px] items-start pt-[24px] relative shrink-0 w-[790px]" data-name="Container">
      <Paragraph4 />
      <ContainerMargin1 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">Spacing (4px grid)</p>
    </div>
  );
}

function Text112() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">4px</p>
    </div>
  );
}

function Text113() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">8px</p>
    </div>
  );
}

function Text114() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">12px</p>
    </div>
  );
}

function Text115() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">16px</p>
    </div>
  );
}

function Text116() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">24px</p>
    </div>
  );
}

function Text117() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">32px</p>
    </div>
  );
}

function Text118() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">48px</p>
    </div>
  );
}

function Text119() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">64px</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[12px] h-[34px] items-start pt-[12px] relative shrink-0 w-[790px]" data-name="Container">
      <Text112 />
      <Text113 />
      <Text114 />
      <Text115 />
      <Text116 />
      <Text117 />
      <Text118 />
      <Text119 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col h-[75px] items-start pt-[24px] relative shrink-0 w-[790px]" data-name="Container">
      <Paragraph13 />
      <Container60 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">Border Radius</p>
    </div>
  );
}

function Text120() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">4px buttons-sm</p>
    </div>
  );
}

function Text121() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">8px buttons/inputs/alerts</p>
    </div>
  );
}

function Text122() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">12px cards/modals</p>
    </div>
  );
}

function Text123() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">9999px badges/avatars</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[12px] h-[34px] items-start pt-[12px] relative shrink-0 w-[790px]" data-name="Container">
      <Text120 />
      <Text121 />
      <Text122 />
      <Text123 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col h-[75px] items-start pt-[24px] relative shrink-0 w-[790px]" data-name="Container">
      <Paragraph14 />
      <Container62 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">Component Sizes</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Btn-sm h-32px px-12px</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Btn-md h-44px px-16px</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Btn-lg h-48px px-24px</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Input h-44px px-12px</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Badge-md h-32px px-12px</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Badge-sm h-20px px-8px</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Avatar-sm 24px</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Avatar-md 32px</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Avatar-lg 48px</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="gap-x-[32px] gap-y-[4px] grid grid-cols-[___242px_242px_242px] grid-rows-[___18px_18px_18px] relative shrink-0 w-full" data-name="Container">
      <Paragraph16 />
      <Paragraph17 />
      <Paragraph18 />
      <Paragraph19 />
      <Paragraph20 />
      <Paragraph21 />
      <Paragraph22 />
      <Paragraph23 />
      <Paragraph24 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Container:margin">
      <Container64 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col h-[115px] items-start pt-[24px] relative shrink-0 w-[790px]" data-name="Container">
      <Paragraph15 />
      <ContainerMargin2 />
    </div>
  );
}

function QuickRefSection3() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start p-[20px] relative rounded-[12px] shrink-0 w-full" data-name="QuickRefSection">
      <Container43 />
      <Container57 />
      <Container59 />
      <Container61 />
      <Container63 />
    </div>
  );
}

function QuickRefSectionMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="QuickRefSection:margin">
      <QuickRefSection3 />
    </div>
  );
}

function SubSection3() {
  return (
    <div className="content-stretch flex flex-col h-[691px] items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading4 />
      <QuickRefSectionMargin2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Naming Conventions</p>
    </div>
  );
}

function Text124() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] tracking-[0.275px] uppercase whitespace-nowrap">Type</p>
    </div>
  );
}

function Text125() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] tracking-[0.275px] uppercase whitespace-nowrap">Pattern</p>
    </div>
  );
}

function Text126() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] tracking-[0.275px] uppercase whitespace-nowrap">Example</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#f9fafb] border-[#e5e7eb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_16.50px] px-[16px] py-[10px] relative shrink-0 w-full" data-name="Container">
      <Text124 />
      <Text125 />
      <Text126 />
    </div>
  );
}

function Text127() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Component</p>
    </div>
  );
}

function Text128() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">PascalCase</p>
    </div>
  );
}

function Text129() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">DSButton, DSCard, AgentRow</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text127 />
      <Text128 />
      <Text129 />
    </div>
  );
}

function Text130() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Variant prop</p>
    </div>
  );
}

function Text131() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">camelCase string union</p>
    </div>
  );
}

function Text132() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">{`variant='primary'`}</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text130 />
      <Text131 />
      <Text132 />
    </div>
  );
}

function Text133() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Size prop</p>
    </div>
  );
}

function Text134() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">camelCase string union</p>
    </div>
  );
}

function Text135() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">{`size='md'`}</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text133 />
      <Text134 />
      <Text135 />
    </div>
  );
}

function Text136() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">State prop</p>
    </div>
  );
}

function Text137() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">camelCase boolean</p>
    </div>
  );
}

function Text138() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">disabled, loading, required</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text136 />
      <Text137 />
      <Text138 />
    </div>
  );
}

function Text139() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Event prop</p>
    </div>
  );
}

function Text140() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">on + PascalCase</p>
    </div>
  );
}

function Text141() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">onClose, onChange, onUpload</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text139 />
      <Text140 />
      <Text141 />
    </div>
  );
}

function Text142() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">CSS token</p>
    </div>
  );
}

function Text143() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">--kebab-case</p>
    </div>
  );
}

function Text144() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">--color-teal-600, --shadow-md</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text142 />
      <Text143 />
      <Text144 />
    </div>
  );
}

function Text145() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Tailwind class</p>
    </div>
  );
}

function Text146() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">utility + value</p>
    </div>
  );
}

function Text147() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">bg-[#0D9488], h-11, px-4</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text145 />
      <Text146 />
      <Text147 />
    </div>
  );
}

function Text148() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">File: component</p>
    </div>
  );
}

function Text149() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">PascalCase.tsx</p>
    </div>
  );
}

function Text150() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Button.tsx, AgentRow.tsx</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text148 />
      <Text149 />
      <Text150 />
    </div>
  );
}

function Text151() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">File: section</p>
    </div>
  );
}

function Text152() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">PascalCase.tsx</p>
    </div>
  );
}

function Text153() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Foundations.tsx, Patterns.tsx</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text151 />
      <Text152 />
      <Text153 />
    </div>
  );
}

function Text154() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">File: index</p>
    </div>
  );
}

function Text155() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">index.tsx</p>
    </div>
  );
}

function Text156() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Re-exports from folder</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text154 />
      <Text155 />
      <Text156 />
    </div>
  );
}

function Text157() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Figma: frame</p>
    </div>
  );
}

function Text158() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">Component/Variant</p>
    </div>
  );
}

function Text159() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Button/Primary, Badge/Success</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="border-[#f9fafb] border-b border-solid grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text157 />
      <Text158 />
      <Text159 />
    </div>
  );
}

function Text160() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Figma: token</p>
    </div>
  );
}

function Text161() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#00786f] text-[12px] whitespace-nowrap">Category/Scale</p>
    </div>
  );
}

function Text162() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Teal/600, Gray/200</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="grid grid-cols-[___266px_266px_266px] grid-rows-[_18px] px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text160 />
      <Text161 />
      <Text162 />
    </div>
  );
}

function QuickRefSection4() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[458.5px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="QuickRefSection">
      <Container65 />
      <Container66 />
      <Container67 />
      <Container68 />
      <Container69 />
      <Container70 />
      <Container71 />
      <Container72 />
      <Container73 />
      <Container74 />
      <Container75 />
      <Container76 />
      <Container77 />
    </div>
  );
}

function QuickRefSectionMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="QuickRefSection:margin">
      <QuickRefSection4 />
    </div>
  );
}

function SubSection4() {
  return (
    <div className="content-stretch flex flex-col h-[538.5px] items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading5 />
      <QuickRefSectionMargin3 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#99a1af] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">Design System Version</p>
    </div>
  );
}

function DsBadge() {
  return (
    <div className="bg-[#f0fdfa] border border-[#99f6e4] border-solid content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="DSBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#0f766e] text-[12px] whitespace-nowrap">v1.0.0</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <DsBadge />
    </div>
  );
}

function Text163() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-start pt-px relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#009689] text-[12px] whitespace-nowrap">✓</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Initial design system release for Agentic AI platform</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text163 />
      <Paragraph25 />
    </div>
  );
}

function Text164() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-start pt-px relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#009689] text-[12px] whitespace-nowrap">✓</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Teal + Navy brand color system with 5 semantic variants</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex gap-[8px] h-[27px] items-start pt-[8px] relative shrink-0 w-[790px]" data-name="Container">
      <Text164 />
      <Paragraph26 />
    </div>
  );
}

function Text165() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-start pt-px relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#009689] text-[12px] whitespace-nowrap">✓</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">5 button variants: Primary, Secondary, Tertiary, Destructive, Ghost</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex gap-[8px] h-[27px] items-start pt-[8px] relative shrink-0 w-[790px]" data-name="Container">
      <Text165 />
      <Paragraph27 />
    </div>
  );
}

function Text166() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-start pt-px relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#009689] text-[12px] whitespace-nowrap">✓</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Form fields: Input (5 states), Select, Textarea, Checkbox, Toggle, Radio</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex gap-[8px] h-[27px] items-start pt-[8px] relative shrink-0 w-[790px]" data-name="Container">
      <Text166 />
      <Paragraph28 />
    </div>
  );
}

function Text167() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-start pt-px relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#009689] text-[12px] whitespace-nowrap">✓</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Data display: Badge (6 variants), Card, Progress, Alert, Agent row, Table</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex gap-[8px] h-[27px] items-start pt-[8px] relative shrink-0 w-[790px]" data-name="Container">
      <Text167 />
      <Paragraph29 />
    </div>
  );
}

function Text168() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-start pt-px relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#009689] text-[12px] whitespace-nowrap">✓</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Patterns: Upload, Modal, Confirm dialog, Tooltip, Tabs, Empty states, Skeleton</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex gap-[8px] h-[27px] items-start pt-[8px] relative shrink-0 w-[790px]" data-name="Container">
      <Text168 />
      <Paragraph30 />
    </div>
  );
}

function Text169() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-start pt-px relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#009689] text-[12px] whitespace-nowrap">✓</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Full WCAG 2.1 AA contrast compliance verified</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex gap-[8px] h-[27px] items-start pt-[8px] relative shrink-0 w-[790px]" data-name="Container">
      <Text169 />
      <Paragraph31 />
    </div>
  );
}

function Text170() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-start pt-px relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#009689] text-[12px] whitespace-nowrap">✓</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Complete dev-ready code snippets for all components</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex gap-[8px] h-[27px] items-start pt-[8px] relative shrink-0 w-[790px]" data-name="Container">
      <Text170 />
      <Paragraph32 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col h-[224px] items-start pt-[16px] relative shrink-0 w-[790px]" data-name="Container">
      <Container80 />
      <Container81 />
      <Container82 />
      <Container83 />
      <Container84 />
      <Container85 />
      <Container86 />
      <Container87 />
    </div>
  );
}

function QuickRefSection5() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start p-[20px] relative rounded-[12px] shrink-0 w-full" data-name="QuickRefSection">
      <Container78 />
      <Container79 />
    </div>
  );
}

function QuickRefSectionMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="QuickRefSection:margin">
      <QuickRefSection5 />
    </div>
  );
}

function Text171() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start pt-px relative shrink-0 w-[13px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[13px] whitespace-nowrap">ℹ</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#193cb8] text-[12px] w-[784px]">Always bump the DS version when adding, modifying, or removing a component. Follow semver: major for breaking changes, minor for new components/variants, patch for bug fixes and annotation updates.</p>
    </div>
  );
}

function Note3() {
  return (
    <div className="bg-[#eff6ff] border border-[#bedbff] border-solid content-stretch flex gap-[10px] h-[61px] items-start px-[14px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Note">
      <Text171 />
      <Paragraph33 />
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

function SubSection5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-[832px]" data-name="SubSection">
      <Heading6 />
      <QuickRefSectionMargin4 />
      <NoteMargin3 />
    </div>
  );
}

function QuickRefSection() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[896px] pb-[80px] pt-[40px] px-[32px] relative shrink-0 w-[896px]" data-name="QuickRefSection">
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
      <QuickRefSection />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_4)" id="Icon">
          <path d={svgPaths.p2add52c0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.6" />
          <path d={svgPaths.p2ee86900} fill="white" id="Vector_2" />
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

function Container90() {
  return (
    <div className="bg-[#0d9488] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.25px] not-italic relative shrink-0 text-[#101828] text-[13px] whitespace-nowrap">Claimora</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] not-italic relative shrink-0 text-[#99a1af] text-[10px] whitespace-nowrap">Design System v1.0</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[92.117px]" data-name="Container">
      <Paragraph34 />
      <Paragraph35 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container88() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start p-[20px] relative shrink-0 w-full" data-name="Container">
      <Container89 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Foundations</p>
    </div>
  );
}

function Text172() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">◈</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text172 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">Foundations</p>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[6px] relative shrink-0 w-full" data-name="Button:margin">
      <Button1 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph36 />
      <ButtonMargin />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Components</p>
    </div>
  );
}

function Text173() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">⬡</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text173 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">Button</p>
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[6px] relative shrink-0 w-full" data-name="Button:margin">
      <Button2 />
    </div>
  );
}

function Text174() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">⊟</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text174 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">Form Fields</p>
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[2px] relative shrink-0 w-full" data-name="Button:margin">
      <Button3 />
    </div>
  );
}

function Text175() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">⊞</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text175 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">Data Display</p>
    </div>
  );
}

function ButtonMargin3() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[2px] relative shrink-0 w-full" data-name="Button:margin">
      <Button4 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col h-[156px] items-start pt-[20px] relative shrink-0 w-[199px]" data-name="Container">
      <Paragraph37 />
      <ButtonMargin1 />
      <ButtonMargin2 />
      <ButtonMargin3 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Patterns</p>
    </div>
  );
}

function Text176() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">⊕</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text176 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] whitespace-nowrap">{`Patterns & Layouts`}</p>
    </div>
  );
}

function ButtonMargin4() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[6px] relative shrink-0 w-full" data-name="Button:margin">
      <Button5 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col h-[78px] items-start pt-[20px] relative shrink-0 w-[199px]" data-name="Container">
      <Paragraph38 />
      <ButtonMargin4 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Reference</p>
    </div>
  );
}

function Text177() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[16px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0d9488] text-[14px] text-center whitespace-nowrap">⊛</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex gap-[10px] h-[55px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Text177 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#0d9488] text-[13px] w-[153px]">{`Accessibility & Quick Ref`}</p>
    </div>
  );
}

function ButtonMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Button:margin">
      <Button6 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-[199px]" data-name="Container">
      <Paragraph39 />
      <ButtonMargin5 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-[539.5_0_0] flex-col items-start min-h-px overflow-clip px-[12px] py-[16px] relative w-full" data-name="Navigation">
      <Container92 />
      <Container93 />
      <Container94 />
      <Container95 />
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.875px] not-italic relative shrink-0 text-[#99a1af] text-[11px] w-[183px]">Built with Inter · Teal + Navy palette · WCAG AA compliant</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="border-[#e5e7eb] border-solid border-t content-stretch flex flex-col items-start px-[20px] py-[16px] relative shrink-0 w-full" data-name="Container">
      <Paragraph40 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#fafafa] border-[#e5e7eb] border-r border-solid content-stretch flex flex-col h-[710px] items-start left-0 top-0 w-[224px]" data-name="Sidebar">
      <Container88 />
      <Navigation />
      <Container96 />
    </div>
  );
}

function Text178() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] whitespace-nowrap">Design System</p>
    </div>
  );
}

function Text179() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#d1d5dc] text-[11px] whitespace-nowrap">/</p>
    </div>
  );
}

function Text180() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#1e2939] text-[13px] whitespace-nowrap">{`Accessibility & Quick Reference`}</p>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Text178 />
      <Text179 />
      <Text180 />
    </div>
  );
}

function Text182() {
  return <div className="bg-[#0d9488] relative rounded-[16777200px] shrink-0 size-[6px]" data-name="Text" />;
}

function Text181() {
  return (
    <div className="bg-[#f0fdfa] border border-[#99f6e4] border-solid content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="Text">
      <Text182 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#0f766e] text-[11px] whitespace-nowrap">v1.0.0 · Claimora DS</p>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.9)] border-[#e5e7eb] border-b border-solid content-stretch flex h-[56px] items-center justify-between left-[224px] px-[32px] top-0 w-[905px]" data-name="TopBar">
      <Container97 />
      <Text181 />
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