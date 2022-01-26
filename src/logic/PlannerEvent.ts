interface PlannerEventProprieties{
  name: string,
  description: string,
  timeStart: Date,
  timeEnd?: Date
}

abstract class PlannerEvent<Proprieties extends PlannerEventProprieties>{
  constructor(
    protected proprieties: Proprieties
  ){

  }
}

export type { PlannerEventProprieties }
export default PlannerEvent