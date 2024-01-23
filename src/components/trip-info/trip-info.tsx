import { FC } from "react"

type Props ={
    title: string
    duration: number
    level:string
}

const TripInfo:FC<Props> = ({title,duration,level}) => {
    return(
        <div className="trip-info">
        <h3
          data-test-id="book-trip-popup-title"
          className="trip-info__title"
        >
          {title}
        </h3>
        <div className="trip-info__content">
          <span
            data-test-id="book-trip-popup-duration"
            className="trip-info__duration"
          >
            <strong>{duration}</strong> days
          </span>
          <span
            data-test-id="book-trip-popup-level"
            className="trip-info__level"
          >
            {level}
          </span>
        </div>
      </div>
    )
}

export default TripInfo;