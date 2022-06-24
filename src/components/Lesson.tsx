import { CheckCircle, Lock } from 'phosphor-react'
import {format, isPast} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

   const isLessonAvailable = isPast(props.availableAt)
   const unclickable = !isLessonAvailable? 'opacity-60 pointer-events-none' : ''

   const availableDateFormat = format(props.availableAt, "EEEE' • ' d' de ' MMMM' • ' k'h'mm",
   {
     locale: ptBR,
   })

  return(
    <div className={isLessonAvailable? '' : 'cursor-not-allowed'}>
      <a href="#" className={unclickable}>
      <span className="text-gray-300 ">
      {availableDateFormat}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2 ">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
            <CheckCircle size={20}/>
            Conteúdo liberado
          </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2 ">
            <Lock size={20}/>
            Em breve
          </span>
          )}
          <span className="text-xs rounded border border-green-300 py-[0.125rem] px-2 font-bold text-white">
            {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className="text-grey-200 mt-5 block">
          {props.title}
        </strong>
      </div>
    </a>
    </div>
    
  )
}