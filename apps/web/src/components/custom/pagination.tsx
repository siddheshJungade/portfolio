import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
  export function PaginationGroup({
    onClickPrevious,
    onClickNext
  }:{
    onClickPrevious: () => void
    onClickNext: () => void
  }) {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={onClickPrevious} />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={onClickNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  