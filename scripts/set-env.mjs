import { writeFileSync } from 'node:fs';

const apiKey = process.env.OPENWEATHER_API_KEY;

if (!apiKey) {
  console.error(
    '\n❌ Falta OPENWEATHER_API_KEY en el entorno.\n' +
    '   Seteala antes de buildar:\n' +
    '   OPENWEATHER_API_KEY=<tu-key> npm run build\n'
  );
  process.exit(1);
}

// ponytail: npm guarantees cwd=project root for prebuild
writeFileSync(
  'src/environments/environment.ts',
  `export const environment = {\n  openWeatherApiKey: '${apiKey}',\n};\n`
);

console.log('✓ environment.ts generado con la API key.');
