import mongoose, { Schema } from 'mongoose'

const visitSchema = new Schema({
  country: {
    type: String
  },
  countryCode: {
    type: String
  },
  region: {
    type: String
  },
  regionName: {
    type: String
  },
  city: {
    type: String
  },
  zip: {
    type: String
  },
  timezone: {
    type: String
  },
  isp: {
    type: String
  },
  page: {
    type: String
  },
  browser: {
    type: String
  },
  time: {
    type: String
  },
  ref: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

visitSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      country: this.country,
      countryCode: this.countryCode,
      region: this.region,
      regionName: this.regionName,
      city: this.city,
      zip: this.zip,
      timezone: this.timezone,
      isp: this.isp,
      page: this.page,
      browser: this.browser,
      time: this.time,
      ref: this.ref,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Visit', visitSchema)

export const schema = model.schema
export default model
