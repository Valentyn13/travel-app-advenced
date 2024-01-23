import { ChangeEvent, FC } from "react";
import { DURATION, LEVEL } from "../../types/filter.types";
import Input from "../common/input/input";
import Label from "../common/label/label";
import Select from "../common/select/select";

type Props = {
    titleValue:string
    handleTitleChange:(e: ChangeEvent<HTMLInputElement>) => void
    handleDurationChange:(e: ChangeEvent<HTMLSelectElement>) => void
    handleLevelChange:(e: ChangeEvent<HTMLSelectElement>) => void
}

const TripFilter:FC<Props> = ({titleValue, handleDurationChange, handleLevelChange, handleTitleChange}) => {
  return (
    <>
      <h1 className="visually-hidden">Travel App</h1>
      <section className="trips-filter">
        <h2 className="visually-hidden">Trips filter</h2>
        <form className="trips-filter__form" autoComplete="off">
          <Label className="input" name="Search by name" headingClass="visually-hidden">
          <Input
              value={titleValue}
              onChange={handleTitleChange}
              testId="filter-search"
              name="search"
              type="search"
              placeholder="search by title"
            />
          </Label>
          <Label className="select" headingClass="visually-hidden" name="Search by duration">
            <Select
            onChange={handleDurationChange}
            testId="filter-duration"
            name="duration"
            options={[
              {value:DURATION.UNACTIVE,name:'duration'},
              {value:DURATION.LESS_THAN_FIVE,name:'< 5 days'},
              {value:DURATION.FIVE_TO_TEN,name:'< 10 days'},
              {value:DURATION.MORE_OR_EQUAL_TEN,name:'≥ 10 days'},
            ]}
            />
          </Label>
          <Label className="select" headingClass="visually-hidden" name="Search by level">
            <Select
            onChange={handleLevelChange}
            testId="filter-level"
            name="level"
            options={[
              {value:LEVEL.UNACTIVE, name:'level'},
              {value:LEVEL.EASY, name:'easy'},
              {value:LEVEL.MODERATE, name:'moderate'},
              {value:LEVEL.DIFFICULT, name:'difficult'},
            ]}
            />
          </Label>
        </form>
      </section>
    </>
  );
};

export default TripFilter;
