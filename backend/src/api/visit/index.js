import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index } from './controller'
import { schema } from './model'
export Visit, { schema } from './model'

const router = new Router()
const { country, countryCode, region, regionName, city, zip, timezone, isp, page, browser, time, ref } = schema.tree

/**
 * @api {post} /visits Create visit
 * @apiName CreateVisit
 * @apiGroup Visit
 * @apiParam country Visit's country.
 * @apiParam countryCode Visit's countryCode.
 * @apiParam region Visit's region.
 * @apiParam regionName Visit's regionName.
 * @apiParam city Visit's city.
 * @apiParam zip Visit's zip.
 * @apiParam timezone Visit's timezone.
 * @apiParam isp Visit's isp.
 * @apiParam page Visit's page.
 * @apiParam browser Visit's browser.
 * @apiParam time Visit's time.
 * @apiParam ref Visit's ref.
 * @apiSuccess {Object} visit Visit's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Visit not found.
 */
router.post('/',
  body({ country, countryCode, region, regionName, city, zip, timezone, isp, page, browser, time, ref }),
  create)

/**
 * @api {get} /visits Retrieve visits
 * @apiName RetrieveVisits
 * @apiGroup Visit
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of visits.
 * @apiSuccess {Object[]} rows List of visits.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

export default router
