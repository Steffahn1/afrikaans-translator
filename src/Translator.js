import { pipeline } from '@huggingface/transformers';

let translator = null;

export async function loadModel(onProgress) {
  translator = await pipeline('translation', 'Xenova/nllb-200-distilled-600M', {
    progress_callback: onProgress,
});
}


export async function translateText(inputContent) {
  if (!translator) {
    throw new Error('Model not loaded yet');
  }


  const output = await translator(inputContent, {
  src_lang: 'eng_Latn',
  tgt_lang: 'afr_Latn', 
  });

  const results = output[0].translation_text;

  return results;

}


