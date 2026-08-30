import type { WorkerActiveAssignment, WorkerBypassPayload, WorkerValidatePayload } from "@/types/api/worker.types";
import { WorkerAssignedTask } from "./active/WorkerAssignedTask";
import { WorkerInProgressTask } from "./active/WorkerInProgressTask";
import { WorkerOnHoldBypassTask } from "./active/WorkerOnHoldBypassTask";
import { boolean } from "zod";

type WorkerActiveTaskViewProps = {
  assignment: WorkerActiveAssignment;
  isValidating: boolean;
  isRequestingBypass: boolean;
  isCompleting: boolean;

  validationErrorCode?: string | null;

  onValidate: (payload: WorkerValidatePayload) => void;
  onRequestBypass: (payload: WorkerBypassPayload) => void;
  onComplete: () => void;
};

export function WorkerActiveTaskView({
  assignment,
  isValidating,
  isRequestingBypass,
  isCompleting,
  validationErrorCode,
  onValidate,
  onRequestBypass,
  onComplete,
}: WorkerActiveTaskViewProps) {
  switch (assignment.status) {
    case "ASSIGNED":
      return (
        <WorkerAssignedTask
          assignment={assignment}
          isValidating={isValidating}
          isRequestingBypass={isRequestingBypass}
          validationErrorCode={validationErrorCode}
          onValidate={onValidate}
          onRequestBypass={onRequestBypass}
        />
      );
    case "IN_PROGRESS":
      return <WorkerInProgressTask stationType={assignment.stationType} isCompleting={isCompleting} onComplete={onComplete} />;
    case "ON_HOLD_BYPASS":
      return <WorkerOnHoldBypassTask />;
  }
}
