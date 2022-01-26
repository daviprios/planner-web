import PlannerEvent, { PlannerEventProprieties } from './PlannerEvent'

interface ReminderEventProprieties extends PlannerEventProprieties{
  alarmTime: Date
}

class ReminderEvent extends PlannerEvent<ReminderEventProprieties>{
  constructor(proprieties: ReminderEventProprieties){
    super(proprieties)
  }

}

export default ReminderEvent