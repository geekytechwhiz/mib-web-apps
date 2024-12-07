import East from "@mui/icons-material/East";
import {
  Chip,
  IconButton,
  Pagination,
  styled,
  Typography,
} from "@mui/material";
import { FlexBox } from "components/flex-box";
import CustomerService from "components/icons/CustomerService";
import CustomerDashboardLayout from "components/layouts/customer-dashboard";
import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
import DashboardPageHeader from "components/layouts/DashboardPageHeader";
import TableRow from "components/TableRow";
import { Span } from "components/Typography";
import { format } from "date-fns";
import Link from "next/link";
import React from "react"; // styled components

const StyledChip = styled(Chip)(({ theme, green }) => ({
  height: 26,
  margin: "6px",
  padding: " 0 0.25rem",
  color: green ? theme.palette.success.main : theme.palette.primary.main,
  backgroundColor: green
    ? theme.palette.success[100]
    : theme.palette.primary.light,
}));

const TicketList = () => {
  return (
    <CustomerDashboardLayout>
      <DashboardPageHeader
        title="Support Ticket"
        icon={CustomerService}
        navigation={<CustomerDashboardNavigation />}
      />

      {[1, 2, 3].map((item) => (
        <Link href="/support-tickets/xkssThds6h37sd" key={item} passHref>
          <TableRow
            sx={{
              my: "1rem",
              p: "15px 24px",
            }}
          >
            <div>
              <span>My product is broken. I need refund</span>
              <FlexBox alignItems="center" flexWrap="wrap" pt={1} m={-0.75}>
                <StyledChip label="Urgent" size="small" />
                <StyledChip label="Open" size="small" green={1} />

                <Span className="pre" m={0.75} color="grey.600">
                  {format(new Date("2020/10/12"), "MMM dd, yyyy")}
                </Span>

                <Span m={0.75} color="grey.600">
                  Website Problem
                </Span>
              </FlexBox>
            </div>

            <Typography
              flex="0 0 0 !important"
              textAlign="center"
              color="grey.600"
            >
              <IconButton>
                <East fontSize="small" color="inherit" />
              </IconButton>
            </Typography>
          </TableRow>
        </Link>
      ))}

      <FlexBox justifyContent="center" mt={5}>
        <Pagination
          count={5}
          color="primary"
          variant="outlined"
          onChange={(data) => console.log(data)}
        />
      </FlexBox>
    </CustomerDashboardLayout>
  );
};

export default TicketList;
