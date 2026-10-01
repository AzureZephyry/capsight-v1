-- CreateEnum
CREATE TYPE "RequestCompleteness" AS ENUM ('INCOMPLETE', 'COMPLETE');

-- CreateEnum
CREATE TYPE "RequestValidation" AS ENUM ('UNVALIDATED', 'VALIDATED');

-- CreateTable
CREATE TABLE "CapacityAssessment" (
    "id" UUID NOT NULL,
    "requestCompleteness" "RequestCompleteness" NOT NULL,
    "requestValidation" "RequestValidation" NOT NULL,
    "revision" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "CapacityAssessment_pkey" PRIMARY KEY ("id")
);
