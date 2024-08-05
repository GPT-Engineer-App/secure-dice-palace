import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Bitcoin, DiceIcon } from "lucide-react"

const Index = () => {
  const [betAmount, setBetAmount] = useState(0.001);
  const [winChance, setWinChance] = useState(50);

  const handleRoll = () => {
    // Implement dice roll logic here
    console.log('Rolling dice with bet amount:', betAmount, 'and win chance:', winChance);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <Bitcoin className="mr-2" /> Bitcoin Casino
      </h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center">
            <DiceIcon className="mr-2" /> Dice Game
          </CardTitle>
          <CardDescription>Try your luck with our provably fair dice game!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label htmlFor="betAmount" className="block text-sm font-medium text-gray-700 mb-1">
                Bet Amount (BTC)
              </label>
              <Input
                id="betAmount"
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(parseFloat(e.target.value))}
                step="0.00000001"
                min="0.00000001"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="winChance" className="block text-sm font-medium text-gray-700 mb-1">
                Win Chance: {winChance}%
              </label>
              <Slider
                id="winChance"
                min={1}
                max={99}
                step={1}
                value={[winChance]}
                onValueChange={(value) => setWinChance(value[0])}
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleRoll} className="w-full">
            Roll Dice
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;
