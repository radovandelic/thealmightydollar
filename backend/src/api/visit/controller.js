import { success, notFound } from '../../services/response/'
import { Visit } from '.'

export const create = ({ bodymen: { body } }, res, next) => {
  console.log(body)
  Visit.create(body)
    .then((visit) => visit.view(true))
    .then(success(res, 201))
    .catch(next)

}

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Visit.count(query)
    .then(count => Visit.find(query, select, cursor)
      .then((visits) => ({
        count,
        rows: visits.map((visit) => visit.view())
      }))
    )
    .then(success(res))
    .catch(next)
