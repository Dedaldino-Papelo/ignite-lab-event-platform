import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react'
import { DefaultUi, Player, Youtube } from '@vime/react'
import '@vime/core/themes/default.css';
import { gql, useQuery } from '@apollo/client';
import { useGetLessonByIdQuery } from '../graphql/generated';


interface VideoProp {
  lessonSlug: string
}

const Video = (props: VideoProp) => {
  const { data } = useGetLessonByIdQuery({
    variables: {
      slug: props.lessonSlug
    }
  })


  if (!data || !data.lesson) {
    return (
      <div className='flex-1'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className='flex-1'>
      <div className='bg-black flex justify-center'>
        <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
          <Player>
            <Youtube videoId={`${data?.lesson.videoId}`} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className='p-8 max-w-[1100px] mx-auto'>
        <div className='flex items-start gap-16'>
          <div className='flex-1'>
            <h1 className='font-bold text-2xl'>
              {data?.lesson.title}
            </h1>
            <p className='mt-4 text-gray-200 leading-relaxed'>
              {data?.lesson.description}
            </p>
            {data.lesson.teacher && (
              <div className='flex items-center gap-4 mt-6 '>
                <img className='h-16 w-16 rounded-full border-2 border-blue-500' src="https://github.com/Dedaldino-Papelo.png" alt="" />

                <div className='loading-relaxed'>
                  <strong className='font-bold text-2xl block'>
                    {data?.lesson.teacher.name}
                  </strong>
                  <span className='text-gray-200 text-sm block'>
                    {data?.lesson.teacher.bio}
                  </span>
                </div>

              </div>
            )}
          </div>
          <div className='flex flex-col gap-2'>
            <a href='#' className='border p-4 bg-green-500 flex items-center rounded justify-center uppercase font-bold gap-2 hover:bg-green-700 transition-colors'>
              <DiscordLogo size={24} />
              Comunidade do discord</a>
            <a href='#' className='border border-blue-500 p-4 flex items-center rounded justify-center uppercase font-bold gap-2 hover:bg-blue-500 hover:text-gray-900 transition-colors'>
              <Lightning size={24} />
              Accese o desafio
            </a>
          </div>
        </div>

        <div className='gap-8 grid grid-cols-2 mt-20'>
          <a href='' className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hove:bg-gray-600 transition-colors'>
            <div className='bg-green-700 h-fully p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong>
                Material Complementar
              </strong>
              <p className='text-gray-200 mt-2 text-sm'>
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>

          <a href='' className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hove:bg-gray-600 transition-colors'>
            <div className='bg-green-700 h-fully p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong>
                Wallpapers exclusivos
              </strong>
              <p className='text-gray-200 mt-2 text-sm'>
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>

        </div>

      </div>
    </div>
  )
}

export default Video
