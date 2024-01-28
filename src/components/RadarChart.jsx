import { ResponsiveRadar } from '@nivo/radar'

// eslint-disable-next-line react/prop-types
export const RadarChart = ({data}) => {
    return (
        <ResponsiveRadar
            data={data}
            keys={[ 'Trimestre 1', 'Trimestre 2', 'Trimestre 3' ]}
            indexBy="competence"
            maxValue={100}
            valueFormat=" >-.0f"
            margin={{ top: 70, right: 100, bottom: 40, left: 100 }}
            borderColor={{ from: 'color', modifiers: [] }}
            gridLabelOffset={36}
            dotSize={10}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={2}
            colors={{ scheme: 'nivo' }}
            blendMode="multiply"
            motionConfig="wobbly"
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#999',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    )
}