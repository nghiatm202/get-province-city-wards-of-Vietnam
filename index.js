import wards from './data/wards.json'
import provinces from './data/provinces.json'
import districts from './data/districts.json'

export const vietnam = {
  getProvinces: () => provinces,
  getDistricts: () => districts,
  getWards: () => wards,
  getDistrictsByProvinceCode: (provinceCode) =>
    districts.filter((x) => x.province_code == provinceCode),
  getWardsByDistrictCode: (districtCode) =>
    wards.filter((x) => x.district_code == districtCode),
  getWardsByProvinceCode: (provinceCode) =>
    wards.filter((x) => x.province_code == provinceCode),
}
