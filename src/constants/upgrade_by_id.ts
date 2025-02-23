import data from "./data.json"

import { IDataUpgrade } from "./interfaces"

// Arrange data in a way that it can be accessed by name
// {name: unit_or_upgrade_data}
const UPGRADES_BY_ID: { [name: number]: IDataUpgrade } = {}
data.Upgrade.forEach((upgrade) => {
    UPGRADES_BY_ID[upgrade.id] = upgrade
})

console.assert(
    Object.keys(UPGRADES_BY_ID).length === 122,
    `${Object.keys(UPGRADES_BY_ID).length} is not 122`
)

export default UPGRADES_BY_ID
