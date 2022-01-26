import PlannerCollection, { PlannerCollectionProprieties } from './PlannerCollection'
import ReminderEvent from './ReminderEvent'

interface ReminderCollectionProprieties extends PlannerCollectionProprieties{
  s: number
}

class ReminderCollection extends PlannerCollection<ReminderEvent>{
  constructor(
    reminderCollection: Array<ReminderEvent>,
    reminderProprieties: ReminderCollectionProprieties
  ){
    super(reminderCollection, reminderProprieties)
  }
}

export default ReminderCollection