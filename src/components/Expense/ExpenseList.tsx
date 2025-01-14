import { ExpenseItem, ExpenseItemProps } from "./ExpenseItem"

import { formatCurrency } from "../../utils/formatCurrency"

type Props = {
  expenses: ExpenseItemProps[]
  onRemove: (id: string) => void
}

export function ExpenseList({ expenses, onRemove }: Props) {
  const total = expenses.reduce((sum, expense) => sum + expense.value, 0)

  return (
    <div className="bg-gray-500 rounded-xl p-10 min-w-[600px]">
      <header className="flex pb-6 border-b-[1px] border-b-gray-400">
        <p className="text-gray-200 text-base flex flex-1 gap-1">
          Minhas solicitações <i className="text-gray-300">{"\u2022"} </i>
          <span className="text-xxs uppercase">{expenses.length} despesa</span>
        </p>

        <h2 className="text-base font-bold text-gray-100">
          <small className="text-xs text-gray-200 font-normal mr-1">R$</small>
          {formatCurrency(total)}
        </h2>
      </header>

      <ul className="mt-6 flex flex-col gap-4 max-h-[456px] overflow-y-scroll">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            data={expense}
            onRemove={() => onRemove(expense.id)}
          />
        ))}
      </ul>
    </div>
  )
}
