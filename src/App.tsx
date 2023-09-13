import { useState } from 'react'
import { Button } from './components/ui/button'
import './index.css'
import {Github, FileVideo, Upload, Wand2} from 'lucide-react'
import { Separator } from './components/ui/separator'
import { Textarea } from './components/ui/textarea'
import { Label } from './components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Slider } from './components/ui/slider'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='px-6 py-3 flex items-center justify-between border-b'>
        <h1 className='text-xl font-bold'>upload.ai</h1>

        <div className='flex items-center gap-3'>
          <span className='text-sm text-muted-foreground'>Developed with ❤️ by Luiz Felipe on NLW of Rocketseat</span>

          <Separator orientation='vertical' className="h-6"/>

          <Button variant={'outline'}>
            <Github className='w-4 h-4 mr-2'/>
            Github
            </Button>
        </div>

      </div>

      <main className='flex-1 p-6 flex gap-6'>
          <div className='flex flex-col flex-1 gap-4'>
            <div className='grid grid-rows-2 gap-4 flex-1'>
              <Textarea
              className='resize-none p-4 leading-relaxed'
              placeholder='Insert the prompt to AI'
              />

              <Textarea
              className='resize-none p-4 leading-relaxed'
              placeholder='Result generated by the AI' 
              readOnly
              />

              
            </div>

            <p className='text-sm text-muted-foreground'>
              Reminder: you can use the variable <code className='text-violet-400'>{'{transcription}'}</code> on your prompt to add the video content transcription
            </p>

          </div>
          <aside className='w-80 space-y-6'>
            <form className='space-y-6' action="">
              <label
              className='border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5'
              htmlFor="video"
              >
                <FileVideo className='w-4 h-4'/>
                Upload video
              </label>
              <input className='sr-only' type="file" id='video' accept='video/mp4' />

              <Separator/>

              <div className='space-y-2'>
                <Label htmlFor="transcription_prompt"> Transcription prompt</Label>
                <Textarea
                id='transcription_prompt'
                className='h-20 leading-relaxed resize-none'
                placeholder='Include keywords mentioned on video separated by comma (,)'
                />
              </div>

              <Button
              type='submit'
              className='w-full'>
                Upload video
                <Upload className='w-4 h-4 ml-2'/>
              </Button>
            </form>

            <Separator/>

            <form className='space-y-6'>

            <div className='space-y-2'>
                <Label>Prompt</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Select a prompt...' />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value='title'>Youtube Title</SelectItem>
                      <SelectItem value='description'>Youtube Description</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              <Separator/>


              <div className='space-y-2'>
                <Label>Model</Label>
                <Select defaultValue='gpt3.5' disabled>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value='gpt3.5'>GPT 3.5-turbo 16k</SelectItem>
                    </SelectContent>
                </Select>
                <span className='block text-xs text-muted-foreground italic'>You can customize this option soon</span>
              </div>

              <Separator/>

              <div className='space-y-4'>
                <Label>Temperature</Label>
                <Slider
                min={0}
                max={1}
                step={0.1}
                />
                
                <span className='block text-xs text-muted-foreground italic leading-relaxed'>Higher values tends to let the result more creative but taking more risks</span>
              </div>

              <Separator/>

              <Button
              className='w-full'
              type='submit'

              >
                Execute
                <Wand2 className='w-4 h-4 ml-2'/>
              </Button>


            </form>
            

          </aside>
          
      </main>  

    </div>
  )
}
