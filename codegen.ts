import * as dotenv from 'dotenv'
import { CodegenConfig } from '@graphql-codegen/cli'
import * as process from 'process'

dotenv.config()

const config: CodegenConfig = {
  schema: process.env.VITE_API_SERVER_URL,
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
    },
  },
}

export default config
