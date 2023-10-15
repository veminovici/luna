'use client'

import React from 'react'
import { Card, Title, BarChart, Subtitle } from "@tremor/react";

const chartdata = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
];

const valueFormatter = (val: number) => `$ ${new Intl.NumberFormat("us").format(val).toString()}`;

export default function Species() {
  return (
    <Card>
      <Title>Number of species threatened with extinction (2021)</Title>
      <Subtitle>
        The IUCN Red List has assessed only a small share of the total known species in the world.
      </Subtitle>
      <BarChart
        className="mt-6"
        data={chartdata}
        index="name"
        categories={["Number of threatened species"]}
        colors={["blue"]}
        valueFormatter={valueFormatter}
        yAxisWidth={48}
      />
    </Card>
  )
}
