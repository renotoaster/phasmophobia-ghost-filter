import { FC } from 'react'

import { Evidence } from '../data/ghostData'
import { ReactComponent as DOTS } from '../static/icons/evidence/DOTS.svg'
import { ReactComponent as EMF5 } from '../static/icons/evidence/emf5.svg'
import { ReactComponent as Fingerprints } from '../static/icons/evidence/fingerprints.svg'
import { ReactComponent as FreezingTemp } from '../static/icons/evidence/freezing-temp.svg'
import { ReactComponent as ghostOrb } from '../static/icons/evidence/ghost-orbs.svg'
import { ReactComponent as GhostWriting } from '../static/icons/evidence/ghost-writing.svg'
import { ReactComponent as SpiritBox } from '../static/icons/evidence/spirit-box.svg'

type SVGElement = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

export {
  DOTS as DOTSIcon,
  EMF5 as EMF5Icon,
  Fingerprints as FingerprintsIcon,
  FreezingTemp as FreezingTempIcon,
  ghostOrb as GhostOrbIcon,
  GhostWriting as GhostWritingIcon,
  SpiritBox as SpiritBoxIcon,
}

export const iconMap: Record<Evidence, SVGElement> = {
  emf5: EMF5,
  spiritBox: SpiritBox,
  fingerPrints: Fingerprints,
  ghostOrb: ghostOrb,
  ghostWriting: GhostWriting,
  freezingTemp: FreezingTemp,
  DOTS: DOTS,
}

export const EvidenceIcon: FC<{
  name: Evidence
  className?: string
}> = ({ name, className }) => {
  const Icon = iconMap[name]
  return <Icon className={className} />
}
