"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = "Análise de Dados";
export function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
