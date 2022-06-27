import { CheckCircle } from "phosphor-react"
import { isPast, format } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from 'classnames'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class'
}

const Lesson = (props: LessonProps) => {
  const { slug } = useParams<{slug: string}>()

  const isLessonAvailable = isPast(props.availableAt)
  const dataFormat = format(props.availableAt, " EEEE' • 'd' de ' MMMM' • ' k'h'mm",{
    locale: ptBR
  })

  const isLessonActive = slug === props.slug

  return (
    <div>
      <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
         {dataFormat}
        </span>
        <div className={classNames('border border-gray-500 rounded p-4 mt-2 group-hover:border-green-500', {
          'bg-green-500': isLessonActive
        })}>
          <header className="flex items-center justify-between">
             {isLessonAvailable ? (
              <span className={classNames("flex items-center gap-2 text-sm text-blue-500 font-medium",{
                'text-white': isLessonActive

              })}>
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            ) : ( 
            <span className="flex items-center gap-2 text-sm text-orange-400 font-medium">
              <CheckCircle size={20} />
              Em breve
            </span>
            )}
            <span className={classNames("text-xs border rounded border-green-300 py-[0.125rem] text-white font-bold px-2", {
              'border-white': isLessonActive
            })}>
              {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
            </span>
          </header>
          <strong className={classNames(" mt-5 block", {
            'text-white': isLessonActive,
            'text-gray-200': !isLessonActive
          })}>
            {props.title}
          </strong>
        </div>
      </Link>
    </div>
  )
}

export default Lesson
